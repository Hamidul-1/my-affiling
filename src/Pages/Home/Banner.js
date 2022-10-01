import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">TopClientOffer</h1>
                    <h3>High Traffic Monitrazition </h3>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">  Affilate</button>
                    <button class="btn btn-primary">Advertiser</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;