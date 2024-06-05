interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'Ali',
	lastName: 'Maloul',
	age: 35,
	location: 'Sfax'
}

const student2: Student = {
	firstName: 'Daniel',
	lastName: 'Mano',
	age: 22,
	location: 'Akra'
}

const studentsList: Student[] = [student1, student2];

function renderStudents(students: Student[]): void{
	const table = document.createElement('table');
	table.style.border = '1px solid black';
	table.style.borderCollapse = 'collapse';

	const headRow = document.createElement('tr');
	
	const headFirstName = document.createElement('th');
	headFirstName.style.border = '1px solid black';
	headFirstName.style.borderCollapse = 'collapse';
	headFirstName.textContent = 'First name';
	
	const headLocation = document.createElement('th');
	headLocation.style.border = '1px solid black';
	headLocation.style.borderCollapse = 'collapse';
	headLocation.textContent = 'Location';
	
	headRow.appendChild(headFirstName);
	headRow.appendChild(headLocation);
	
	table.appendChild(headRow);
	
	for (const student of students) {
		const dataRow = document.createElement('tr');
		
		const dataFirstName = document.createElement('td');
		dataFirstName.style.border = '1px solid black';
		dataFirstName.style.borderCollapse = 'collapse';
		
		const dataLocation = document.createElement('td');
		dataLocation.style.border = '1px solid black';
		dataLocation.style.borderCollapse = 'collapse';
		
		dataFirstName.textContent = `${student.firstName}`;
		dataLocation.textContent = `${student.location}`;
		
		dataRow.appendChild(dataFirstName);
		dataRow.appendChild(dataLocation);
		
		table.appendChild(dataRow);
	}
	
	document.body.appendChild(table);
}

renderStudents(studentsList);

