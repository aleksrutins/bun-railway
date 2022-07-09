import chalk from 'chalk';

export default {
    port: process.env.PORT || 3000,
    fetch() {
        console.log(chalk.blue('server')  + ' responding');
        return new Response('Hello World');
    }
}