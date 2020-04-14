import { EventEmitter } from '../../stencil.core';
export declare class LoginForm {
    error: string;
    loading: boolean;
    formValid: boolean;
    values: {
        email: any;
        password: any;
    };
    forgottenUrl: string;
    apiEndpoint: string;
    apiMethod: string;
    apiHeaders: any;
    bodyPropEmail: string;
    bodyPropPassword: string;
    tfLoginSuccess: EventEmitter<any>;
    emailInputRef: any;
    passwordInputRef: any;
    onLogin(event: any): Promise<void>;
    fetchAPI(email: any, password: any): void;
    isEmpty(obj: any): boolean;
    onUserInput(event: Event): void;
    render(): any;
}
