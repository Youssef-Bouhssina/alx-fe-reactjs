import React from 'react';

const HomePage = () => {
    return (
        <div className="container mx-auto px-4 py-6">
            {/* Welcome Section */}
            <section className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">
                    Welcome to Recipe App
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                    Discover delicious recipes, save your favorites, and explore new cuisines.
                </p>
            </section>

            {/* Feature Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                        Easy to Use
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Browse recipes and get cooking tips with just a few clicks. Designed for all skill levels.
                    </p>
                </div>
                <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                        Responsive Design
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Fully optimized for all devices. Enjoy seamless experiences on mobile, tablet, and desktop.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
