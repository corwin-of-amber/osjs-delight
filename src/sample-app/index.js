
import './index.css';


const metadata = {
    name: 'Sample'
};


export class SampleApp {

    constructor(core) {
        this.core = core;
    }

    start() {
        this.proc = this.core.make("osjs/application", {metadata});
        var w = this.proc.createWindow({
            id: 'Sample',
            title: "Sample Application",
            dimension: { width: 500, height: 300 }
        });
        w.render();

        var div = document.createElement('div');
        w.$content.appendChild(div);

        w.$content.addEventListener('click', () => {
            var p = document.createElement('p');
            p.textContent = new Date;
            div.appendChild(p);
        });
    }

}


export default SampleApp;
