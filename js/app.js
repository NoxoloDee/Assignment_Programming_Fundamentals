function populate() {
	var element = document.getElementById("question");
	if (quiz.isEnded() || !quiz.getQuestionIndex()) {
		//;
		element.innerHTML = "Your Score is..";
		var buttons = document.getElementById("buttons");
		buttons.innerHTML = showScores();
	}
	else {
		// show question
		element.innerHTML = quiz.getQuestionIndex().text;

		// show choices
		var choices = quiz.getQuestionIndex().choices;
		for (var i = 0; i < choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
		}

		showProgress();
	}

};

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
};

function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
	return quiz.score;
};

var questions = [
	new Question("What is Wonder Woman's best quality?", ["Her optimism", "Her efficiency", "Her compassion", "Her resilience"], "Her optimism"),

	new Question("What does Wonder Woman look for in a romantic partner?", ["Honesty", "Intelligence", "Humor", "Strength"], "Honesty"),

	new Question("Wonder Woman absolutely hates feeling...", ["Weak", "Vulnerable", "Embarrassed", "Out of place"], "Weak"),

	new Question("Which color do you think she finds most appealing?", ["Red", "Yellow", "Blue", "Green"], "Red"),

	new Question("What aggravates Wonder Woman the most?", ["A negative attitude", "Arrogance", "Close-minded people", "People with no imagination"], "A negative attitude"),

	new Question("Who is the God Killer?", ["Beyonce", "Oprah Winfrey", "Amelia Earhart", "Diana princess of the Amazons"], "Diana princess of the Amazons"),
];

var quiz = new Quiz(questions);

populate();
