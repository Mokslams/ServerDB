const Page = require("../components/Page.js");

class PageNewTodo extends Page {
    constructor() {
        super();
        this.route = "";
        this.pageName = "New";
        this.pageTemplateName = "home";
    }

    bodyHTML() {
        return `<h1>New TODO</h1>
                <a href="/" class="btn">Back to home</a>
                <form>
                    <label for="text">Text field</label>
                    <textarea id="text" placeholder="Your text here"></textarea>
                    <label for="status">Status:</label>
                    <select id="status">
                        <option value="1">New task</option>
                        <option value="2">In progress</option>
                        <option value="3">Done</option>
                    </select>
                    <button type="submit" class="btn">Confirm task</button>
                </form>
                <script src="js/newTodo.js"></script>`;
    }
}

module.exports = PageNewTodo;