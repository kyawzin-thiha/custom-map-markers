export default function getGetLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve(position);
            },
            (error) => {
                reject(error);
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    });
}