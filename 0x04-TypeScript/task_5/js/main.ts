export interface MajourCredits {
	credits: number;
	brand: 'MajourCredits';
}

export interface MinorCredits {
	credits: number;
	brand: 'MinorCredits';
}

export function sumMajorCredits(subject1: MajourCredits, subject2: MajourCredits): MajourCredits {
	return {credits: subject1.credits + subject2.credits, brand: 'MajourCredits'}
}
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
	return {credits: subject1.credits + subject2.credits, brand: "MinorCredits"}

}

const maj1: MajourCredits = {
	credits: 500,
	brand:"MajourCredits"
}
const maj2: MajourCredits = {
	credits: 700,
	brand:"MajourCredits"
}

const majSum:MajourCredits = sumMajorCredits(maj1, maj2);
console.log(majSum)


const min1: MinorCredits = {
	credits: 100,
	brand:'MinorCredits'
}
const min2: MinorCredits = {
	credits: 300,
	brand:'MinorCredits'
}

const minSum:MinorCredits = sumMinorCredits(min1, min2);
console.log(minSum)
