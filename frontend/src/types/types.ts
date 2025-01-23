export interface UserData {
	name: string;
	personalNumber: string;
	address: string;
	expirationDate: string;
	price: number;
}

export interface Template {
	id: string;
	name: string;
	type: 'flat' | 'agriculture';
	generateDocument: (userData: UserData) => string;
}

export interface Document {
	id: string;
	template_type: 'flat' | 'agriculture';
	name: string;
	personal_number: string;
	address: string;
	expiration_date: string;
	price: number;
	content: string;
	created_at: string;
}

export interface SearchFilters {
	startDate?: string;
	endDate?: string;
	name?: string;
	expirationStartDate?: string;
	expirationEndDate?: string;
	showAllDocuments?: boolean;
}
