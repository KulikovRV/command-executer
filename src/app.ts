import { PromtService } from "./core/promt/promt.service";

export class App {
    async run() {
        const res = await (new PromtService()).input<number>('Int', 'number');
        console.log(res);
    }
}


const app = new App();
app.run();
