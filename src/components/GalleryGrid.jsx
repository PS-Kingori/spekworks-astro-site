import React, { useState, useEffect, useMemo } from 'react';

const GalleryGrid = ({ residential, commercial, hospitality, religious }) => {
    const [selectedCategory, setSelectedCategory] = useState('residential');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const categories = {
        residential,
        commercial,
        hospitality,
        religious
    };

    const currentImages = categories[selectedCategory] || {};

    // Memoize structured image array
    const imageArray = useMemo(() => {
        return Object.entries(currentImages).map(([projectName, images]) => [
            projectName,
            images.map(image => image.src),
        ]);
    }, [currentImages]);

    // 🔁 Reset loading state when category changes
    useEffect(() => {
        setImagesLoaded(false);
    }, [selectedCategory]);

    // 🖼️ Preload all images in selected category
    useEffect(() => {
        const allImages = Object.values(currentImages)
            .flat()
            .map(img => img.src);

        if (allImages.length === 0) {
            setImagesLoaded(true);
            return;
        }

        let loaded = 0;

        allImages.forEach(src => {
            const img = new Image();
            img.src = src;

            img.onload = img.onerror = () => {
                loaded++;
                if (loaded === allImages.length) {
                    setImagesLoaded(true);
                }
            };
        });

    }, [currentImages]);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage('');
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') closeModal();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="container mx-auto p-8">

            {/* CATEGORY TABS */}
            <div className="flex flex-col lg:flex-row lg:justify-center mb-8 py-10">
                {Object.keys(categories).map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`text-xl px-6 py-2 rounded-full transition-colors ${
                            selectedCategory === category
                                ? 'underline underline-offset-4 decoration-2'
                                : 'text-gray-600 hover:text-gray-400'
                        }`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            {/* LOADER */}
            {!imagesLoaded && (
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-700"></div>
                </div>
            )}

            {/* IMAGE GRID */}
            <div
                className={`transition-opacity duration-500 ${
                    imagesLoaded ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <div className="flex flex-wrap gap-4">
                    {imageArray.map(([projectName, images]) => (
                        <div key={projectName} className="w-full mb-4">
                            <h3 className="text-lg font-bold mb-2">
                                {projectName}
                            </h3>
                            <div className="flex flex-row flex-wrap gap-2">
                                {images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={projectName}
                                        loading="lazy"
                                        className="w-auto h-40 object-cover cursor-pointer hover:opacity-80 transition"
                                        onClick={() => handleImageClick(image)}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white text-2xl"
                        >
                            &times;
                        </button>
                        <img
                            src={selectedImage}
                            alt="Preview"
                            className="max-h-[80vh] object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryGrid;