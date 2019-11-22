export interface StepInterface {
    id: string;
    createdAt: string;
    name: string;
    comment: string;
    viewType: number;
    isComment: boolean;
    description: string;
    showDescription: boolean;
    showPhone: boolean;
    phone: number;
}

export interface StepsInterface {
    clientId: string;
    steps: StepInterface[];
}
