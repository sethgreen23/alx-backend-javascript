interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;

}

class Director implements DirectorInterface {
	workFromHome(): string {
		return 'Working from home';
	}
	getCoffeeBreak(): string {
		return 'Getting a coffee break'
	}
	workDirectorTasks(): string {
		return 'Getting to director tasks'
	}
}
class Teacher implements TeacherInterface {
	workFromHome(): string {
		return 'Working from home';
	}

	getCoffeeBreak(): string {
		return 'Getting a coffee break';
	}

	workTeacherTasks(): string {
		return 'Getting to teacher tasks';
	}
}

function createEmployee(salary: number | string): Director | Teacher {

	if (typeof salary === 'number' && salary < 500) {
		return new Teacher();
	}else{
		return new Director();
	}
}

function isDirector(employee: Director | Teacher): employee is Director {
	return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): string {
	if (isDirector(employee)) {
		return new Director().workDirectorTasks();
	}else{
		return new Teacher().workTeacherTasks();
	}
}

function teachClass(todayClass: 'Math' | 'History'): string{
	if (todayClass === 'Math'){
		return 'Teaching Math';
	}
	return 'Teaching History';
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

console.log(teachClass('Math'));
console.log(teachClass('History'));