const Page = require("../components/Page.js");

// const array = [
//     {
//         id: 1,
//         text: "Get Milk",
//         status: "new",
//         date: "2021-11-06"
//     },
//     {
//         id: 2,
//         text: "Mow the lawn",
//         status: "pending",
//         date: "2021-11-05"
//     },
//     {
//         id: 3,
//         text: "Walk the dog",
//         status: "done",
//         date: "2021-11-04"
//     }
// ];

class PageHome extends Page {
    constructor(connection) {
        super();
        this.route = "";
        this.pageName = "List";
        this.pageTemplateName = "home";
        this.connection = connection;
    }

    getData = async () => {
        try {
            const query = "SELECT * FROM `tasks`";
            const result = await this.connection.execute(query);
            return result[0];
        } catch (error) {
            console.log("Nepavyko sukurti uzduociu lenteles");
            console.log(error);
            return error;
        }
    };

    createTaskList(array) {
        let result = "";
        for (const task of array) {
            const date = new Date(task.date);
            const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            result += `
            <tr>
                <td>${task.id}</td>
                <td>${task.text.slice(0,10)}...</td>
                <td>${task.status}</td>
                <td>${dateString}</td>
                <td>
                    <button data-action="update" data-taskId="${task.id}">Update</button>
                    <button data-action="delete" data-taskId="${task.id}">Delete</button>
                </td>
             </tr>
            `;
        }
        return result;
    }

    async bodyHTML() {
        const array = await this.getData();
      
        return `
        <h1>TODO list</h1>
        <a href="/new" class="btn">Add new task</a>
        <table>
            <tr>
                <th>ID</th>
                <th>Task name</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
            </tr>
            ${this.createTaskList(array)}
        </table>
     
        <div id="myModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <span class="close">&times;</span>
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
            </div>
        </div>
    
      <script src="js/home.js"></script>
        `;
    }
}

module.exports = PageHome;