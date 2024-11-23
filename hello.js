export default function Hello(app) {
    // 定义路由 /hello
    app.get('/hello', (req, res) => {
        res.send('Life is good!');
    });

    // 定义路由 /
    app.get('/', (req, res) => {
        res.send('Welcome to Full Stack Development!');
    });
}
