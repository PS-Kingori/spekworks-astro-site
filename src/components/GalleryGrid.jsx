import React, { useState, useEffect } from 'react';

const GalleryGrid = ({ residential, commercial }) => {
    const [selectedCategory, setSelectedCategory] = useState('residential');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const categories = {
        residential,
        commercial,
    };

    const currentImages = categories[selectedCategory] || [];
  
    const imageArray = Object.entries(currentImages).map(([projectName, images]) => [
        projectName,
        images.map(image => image.src), 
    ]);

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

console.log('Commercial Data:', commercial);

    return (
        <div className="container mx-auto p-8">
            <div className="lg:justify-center lg:flex mb-8 py-10">
                {Object.keys(categories).map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`text-xl px-6 py-2 rounded-full transition-colors ${
                            selectedCategory === category ? 'text-white-600 underline underline-offset-4 decoration-2' : 'text-gray-600 hover:text-gray-400'
                        }`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            <div className="flex flex-wrap gap-4">
                {imageArray.map(([projectName, images]) => (
                    <div key={projectName} className="w-full mb-4">
                        <h3 className="text-lg font-bold mb-2">{projectName}</h3>
                        <div className="flex flex-row flex-wrap gap-2">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={projectName}
                                    className="w-auto h-40 object-cover cursor-pointer"
                                    onClick={() => handleImageClick(image)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="relative">
                        <button onClick={closeModal} className="absolute top-2 right-2 text-white text-2xl">&times;</button>
                        <img src={selectedImage} alt="Preview" className="max-h-[80vh] object-contain" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryGrid;
