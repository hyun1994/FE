import { Component } from "../core/core";

export default class TheFooter extends Component {
    constructor() {
        super({
            tagName: 'footer'
        })
    }
    render() {
        this.el.innerHTML = /* html */ `
            <div>
                <a href="https://github.com/hyun1994/FE/tree/main/movie">GitHub Repository</a>
            </div>
            <div>
                <a href="https://github.com/hyun1994">${new Date().getFullYear()} Jihyun</a>
            </div>
        `
    }
}