import http from 'k6/http';

export const options = {
    vus: 10,
    duration: '30s',
};

export default function () {
    http.get('https://catatanku-app-wybi-three.vercel.app/dashboard');
    http.get('https://catatanku-app-wybi-three.vercel.app/transaksi');
    http.get('https://catatanku-app-wybi-three.vercel.app/analisis');
}