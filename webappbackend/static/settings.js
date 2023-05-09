function difficultLevel() {
    var dropWithText = document.createElement("div");
    dropWithText.style.marginTop = "20px"
    var label1 = document.createElement("label");
    label1.innerHTML = "Questions difficulty";
    label1.style.fontSize = "20px";
    label1.style.fontFamily = "ABeeZee"
    label1.style.margin = "10px 10px 10px 10px"
    var optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = ""
    var dropdown = document.createElement("select");
    dropdown.style.width = "200px"
    dropdown.style.fontFamily = "ABeeZee"
    dropdown.style.fontSize = "20px"
    var option1 = document.createElement("option");
    option1.innerHTML = "easy";
    var option2 = document.createElement("option");
    option2.innerHTML = "medium";
    var option3 = document.createElement("option");
    option3.innerHTML = "hard";
    dropdown.appendChild(option1);
    dropdown.appendChild(option2);
    dropdown.appendChild(option3);
    dropWithText.appendChild(label1)
    dropWithText.appendChild(dropdown)

    var dropWithText2 = document.createElement("div");
    dropWithText2.style.marginTop = "20px"
    var label2 = document.createElement("label");
    label2.innerHTML = "Lexic difficulty";
    label2.style.fontSize = "20px";
    label2.style.fontFamily = "ABeeZee"
    label2.style.margin = "10px 10px 10px 10px"
    var optionsDiv2 = document.getElementById("options");
    optionsDiv2.innerHTML = ""
    var dropdown2 = document.createElement("select");
    dropdown2.style.width = "200px"
    dropdown2.style.fontFamily = "ABeeZee"
    dropdown2.style.fontSize = "20px"
    option1 = document.createElement("option");
    option1.innerHTML = "easy";
    option2 = document.createElement("option");
    option2.innerHTML = "medium";
    option3 = document.createElement("option");
    option3.innerHTML = "hard";
    dropdown2.appendChild(option1);
    dropdown2.appendChild(option2);
    dropdown2.appendChild(option3);
    dropWithText2.appendChild(label2)
    dropWithText2.appendChild(dropdown2)

    optionsDiv.appendChild(dropWithText);
    optionsDiv.appendChild(dropWithText2);
    // optionsDiv.style.backgroundColor = "#000000";
}

function visuals() {
    var optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = ""

    var dropWithText = document.createElement("div");
    dropWithText.style.marginTop = "20px"
    var label1 = document.createElement("label");
    label1.innerHTML = "Font size";
    label1.style.fontSize = "20px";
    label1.style.fontFamily = "ABeeZee"
    label1.style.margin = "10px 10px 10px 10px"
    var optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = ""
    var dropdown = document.createElement("select");
    dropdown.style.width = "200px"
    dropdown.style.fontFamily = "ABeeZee"
    dropdown.style.fontSize = "20px"
    var option1 = document.createElement("option");
    option1.innerHTML = "10px";
    var option2 = document.createElement("option");
    option2.innerHTML = "15px";
    var option3 = document.createElement("option");
    option3.innerHTML = "20px";
    var option4 = document.createElement("option");
    option4.innerHTML = "25px";
    dropdown.appendChild(option1);
    dropdown.appendChild(option2);
    dropdown.appendChild(option3);
    dropdown.appendChild(option4);
    dropWithText.appendChild(label1)
    dropWithText.appendChild(dropdown)


    var dropWithText2 = document.createElement("div");
    dropWithText2.style.marginTop = "20px"
    var label2 = document.createElement("label");
    label2.innerHTML = "Interface color";
    label2.style.fontSize = "20px";
    label2.style.fontFamily = "ABeeZee"
    label2.style.margin = "10px 10px 10px 10px"
    var optionsDiv2 = document.getElementById("options");
    optionsDiv2.innerHTML = ""
    var dropdown2 = document.createElement("select");
    dropdown2.style.width = "200px"
    dropdown2.style.fontFamily = "ABeeZee"
    dropdown2.style.fontSize = "20px"
    option1 = document.createElement("option");
    option1.innerHTML = "Green";
    option2 = document.createElement("option");
    option2.innerHTML = "Blue";
    option3 = document.createElement("option");
    option3.innerHTML = "Grey";
    option4 = document.createElement("option");
    option4.innerHTML = "Red";
    dropdown2.appendChild(option1);
    dropdown2.appendChild(option2);
    dropdown2.appendChild(option3);
    dropdown2.appendChild(option4);
    dropWithText2.appendChild(label2)
    dropWithText2.appendChild(dropdown2)

    optionsDiv.appendChild(dropWithText);
    optionsDiv.appendChild(dropWithText2);


}

function language() {
    var optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = ""

    var dropWithText = document.createElement("div");
    dropWithText.style.marginTop = "20px"
    var label1 = document.createElement("label");
    label1.innerHTML = "Language of questions";
    label1.style.fontSize = "20px";
    label1.style.fontFamily = "ABeeZee"
    label1.style.margin = "10px 10px 10px 10px"
    var optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = ""
    var dropdown = document.createElement("select");
    dropdown.style.width = "200px"
    dropdown.style.fontFamily = "ABeeZee"
    dropdown.style.fontSize = "20px"
    var option1 = document.createElement("option");
    option1.innerHTML = "English";
    var option2 = document.createElement("option");
    option2.innerHTML = "French";
    var option3 = document.createElement("option");
    option3.innerHTML = "Russian";
    var option4 = document.createElement("option");
    option4.innerHTML = "German";
    dropdown.appendChild(option1);
    dropdown.appendChild(option2);
    dropdown.appendChild(option3);
    dropdown.appendChild(option4);
    dropWithText.appendChild(label1)
    dropWithText.appendChild(dropdown)

    var dropWithText2 = document.createElement("div");
    dropWithText2.style.marginTop = "20px"
    var label2 = document.createElement("label");
    label2.innerHTML = "Language of translation";
    label2.style.fontSize = "20px";
    label2.style.fontFamily = "ABeeZee"
    label2.style.margin = "10px 10px 10px 10px"
    var optionsDiv2 = document.getElementById("options");
    optionsDiv2.innerHTML = ""
    var dropdown2 = document.createElement("select");
    dropdown2.style.width = "200px"
    dropdown2.style.fontFamily = "ABeeZee"
    dropdown2.style.fontSize = "20px"
    option1 = document.createElement("option");
    option1.innerHTML = "English";
    option2 = document.createElement("option");
    option2.innerHTML = "French";
    option3 = document.createElement("option");
    option3.innerHTML = "Russian";
    option4 = document.createElement("option");
    option4.innerHTML = "German";
    dropdown2.appendChild(option1);
    dropdown2.appendChild(option2);
    dropdown2.appendChild(option3);
    dropdown2.appendChild(option4);
    dropWithText2.appendChild(label2)
    dropWithText2.appendChild(dropdown2)

    optionsDiv.appendChild(dropWithText);
    optionsDiv.appendChild(dropWithText2);
}

function timerDisplay() {
    var optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = ""

    var dropWithText = document.createElement("div");
    dropWithText.style.marginTop = "20px"
    var label1 = document.createElement("label");
    label1.innerHTML = "Show timer";
    label1.style.fontSize = "20px";
    label1.style.fontFamily = "ABeeZee"
    label1.style.margin = "10px 10px 10px 10px"
    var optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = ""
    var dropdown = document.createElement("select");
    dropdown.style.width = "200px"
    dropdown.style.fontFamily = "ABeeZee"
    dropdown.style.fontSize = "20px"
    var option1 = document.createElement("option");
    option1.innerHTML = "Yes";
    var option2 = document.createElement("option");
    option2.innerHTML = "No";
    dropdown.appendChild(option1);
    dropdown.appendChild(option2);
    dropWithText.appendChild(label1)
    dropWithText.appendChild(dropdown)

    var dropWithText2 = document.createElement("div");
    dropWithText2.style.marginTop = "20px"
    var label2 = document.createElement("label");
    label2.innerHTML = "Timer duration";
    label2.style.fontSize = "20px";
    label2.style.fontFamily = "ABeeZee"
    label2.style.margin = "10px 10px 10px 10px"
    var optionsDiv2 = document.getElementById("options");
    optionsDiv2.innerHTML = ""
    var dropdown2 = document.createElement("select");
    dropdown2.style.width = "200px"
    dropdown2.style.fontFamily = "ABeeZee"
    dropdown2.style.fontSize = "20px"
    option1 = document.createElement("option");
    option1.innerHTML = "1 min.";
    option2 = document.createElement("option");
    option2.innerHTML = "5 min.";
    option3 = document.createElement("option");
    option3.innerHTML = "10 min.";
    option4 = document.createElement("option");
    option4.innerHTML = "15 min.";
    dropdown2.appendChild(option1);
    dropdown2.appendChild(option2);
    dropdown2.appendChild(option3);
    dropdown2.appendChild(option4);
    dropWithText2.appendChild(label2)
    dropWithText2.appendChild(dropdown2)

    optionsDiv.appendChild(dropWithText);
    optionsDiv.appendChild(dropWithText2);
}

function vocabCategories() {
    var optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = ""

    var dropWithText = document.createElement("div");
    dropWithText.style.marginTop = "20px"
    var label1 = document.createElement("label");
    label1.innerHTML = "Your favourite category";
    label1.style.fontSize = "20px";
    label1.style.fontFamily = "ABeeZee"
    label1.style.margin = "10px 10px 10px 10px"
    var optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = ""
    var dropdown = document.createElement("select");
    dropdown.style.width = "200px"
    dropdown.style.fontFamily = "ABeeZee"
    dropdown.style.fontSize = "20px"
    var option1 = document.createElement("option");
    option1.innerHTML = "History";
    var option2 = document.createElement("option");
    option2.innerHTML = "Economics";
    var option3 = document.createElement("option");
    option3.innerHTML = "Languages";
    var option4 = document.createElement("option");
    option4.innerHTML = "Social";
    var option5 = document.createElement("option");
    option5.innerHTML = "Natural science";
    var option6 = document.createElement("option");
    option6.innerHTML = "General";
    dropdown.appendChild(option1);
    dropdown.appendChild(option2);
    dropdown.appendChild(option3);
    dropdown.appendChild(option4);
    dropdown.appendChild(option5);
    dropdown.appendChild(option6);
    dropWithText.appendChild(label1)
    dropWithText.appendChild(dropdown)
    optionsDiv.appendChild(dropWithText);
}

function feedbackAndProgress() {
    var optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = ""

    var dropWithText = document.createElement("div");
    dropWithText.style.marginTop = "20px"
    var label1 = document.createElement("label");
    label1.innerHTML = "Save my answers";
    label1.style.fontSize = "20px";
    label1.style.fontFamily = "ABeeZee"
    label1.style.margin = "10px 10px 10px 10px"
    var optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = ""
    var dropdown = document.createElement("select");
    dropdown.style.width = "200px"
    dropdown.style.fontFamily = "ABeeZee"
    dropdown.style.fontSize = "20px"
    var option1 = document.createElement("option");
    option1.innerHTML = "Yes";
    var option2 = document.createElement("option");
    option2.innerHTML = "No";
    dropdown.appendChild(option1);
    dropdown.appendChild(option2);
    dropWithText.appendChild(label1)
    dropWithText.appendChild(dropdown)

    var deleteProgress = document.createElement("button");
    deleteProgress.innerHTML = "Reset my progress"
    deleteProgress.style.width = "200px";
    deleteProgress.style.margin = "20px 0 0 10px";
    deleteProgress.style.padding = "5px";
    deleteProgress.style.border = "none";
    deleteProgress.style.backgroundColor = "red";
    deleteProgress.style.color = "white";
    deleteProgress.style.fontSize = "20px";
    deleteProgress.style.fontFamily = "ABeeZee";
    deleteProgress.style.borderRadius = "20px";
    optionsDiv.appendChild(dropWithText)
    optionsDiv.appendChild(deleteProgress)

}

window.onload = function () {
    var rect = document.getElementById("rectangle");
    var rectBack = document.getElementById("rectangleBack");


    rectBack.style.top = "50%";
    rectBack.style.opacity = "1";

    rect.style.top = "50%";
    rect.style.opacity = "1";
}