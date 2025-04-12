document.getElementById("predictionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const symptom = document.getElementById("symptom").value;

    if (!age || !gender || !symptom) {
        document.getElementById("result").innerText = "Please fill in all fields.";
        return;
    }

    // Mocking a server prediction call
    const mockResponse = predictDisease(age, gender, symptom);
    document.getElementById("result").innerText = "Predicted Disease: " + mockResponse;
});

function predictDisease(age, gender, symptom) {
    // Mock logic: Replace this part with your actual ML API call
    if (symptom.toLowerCase().includes("fever")) {
        return "Flu";
    } else if (symptom.toLowerCase().includes("cough")) {
        return "Bronchitis";
    } else if (symptom.toLowerCase().includes("pain")) {
        return "Migraine";
    } else {
        return "Consult Doctor";
    }
}
