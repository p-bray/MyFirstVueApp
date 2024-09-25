const app = Vue.createApp({
    data() {
        return {
            productName: 'Book a cruise to the moon',
            productDescription: 'Cruise to the moon in our luxurious shuttle. ',
            productImage: 'assets/cruise.jpg',
            productImageDescription: 'An astronaut floats outside the window while you sit in comfort',
            productImageStyle: {
                'border-radius': '15px'
            }
        }
    },
});