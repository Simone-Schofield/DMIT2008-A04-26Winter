/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/

// 1. select topic & new topic form
let topicsList = document.querySelector(".topics-list");
let newTopicForm = document.querySelector(".new-topic-form");

// 5. Create a function called "addTopicToPage" that takes the topic name and the topic list element as a parameter.
const addTopicToPage = (topicName, topicListElement) => {
    
    // 6. In the "addTopicToPage" function use a template string to create a new list item and add it to the page.
    let newTopicElement = `<li class="list-group-item">
        ${topicName}
    </li>`;

    topicListElement.innerHTML += newTopicElement;
    // ^- This is basic a quicker method than topicListElement = topicsList + newTopicElement;

};

// 2. Add an event listener and stop the event from propgating.
newTopicForm.addEventListener(
    "submit",
    (event) => {
        event.preventDefault();

        // 3. Get the value of the input from the "form.elements" from the event handler callback.
        let topicInput = event.target.elements["new-topic"];
        let newTopic = topicInput.value;
        console.log(newTopic);

        // 4. Validate the inputs to make sure the topic is not empty.
        if (newTopic === "") {
            topicInput.classList.add("is-invalid");
        } else {
            topicInput.classList.remove("is-invalid");
        }

        // 7. Add some topics and test your application!
        addTopicToPage(newTopic, topicsList);

        // Clears the input after it's submitted.
        newTopicForm.reset();
    }
);
