import { Injectable } from '@angular/core';

export interface BadgeItem
{
    type: string;
    value: string;
}

export interface ChildrenItems
{
    state: string;
    target?: boolean;
    name: string;
    type?: string;
    children?: ChildrenItems[];
}

export interface MainMenuItems
{
    state: string;
    short_label?: string;
    main_state?: string;
    target?: boolean;
    name: string;
    type: string;
    icon: string;
    badge?: BadgeItem[];
    children?: ChildrenItems[];
}

export interface Menu
{
    label: string;
    main: MainMenuItems[];
}




const MENUITEMS = [
    {
        label: 'Navigation',
        main: [
            {
                state: 'dashboard',
                short_label: 'D',
                name: 'Dashboard',
                type: 'link',
                icon: 'feather icon-home',
            },
            {
                state: 'players',
                short_label: 'P',
                name: 'Players',
                type: 'link',
                icon: 'fa fa-child'
            },
            {
                state: 'parents',
                short_label: 'P',
                name: 'Parents',
                type: 'link',
                icon: 'feather icon-users'
            },
            {
                state: 'pros',
                short_label: 'P',
                name: 'Pros',
                type: 'link',
                icon: 'feather icon-box'
            },
            {
                state: 'attendance',
                short_label: 'a',
                name: 'Attendance',
                type: 'link',
                icon: 'feather icon-box'
            },
            {
                state: 'evals',
                short_label: 'E',
                name: 'Evals',
                type: 'link',
                icon: 'feather icon-box'
            },
            {
                state: 'fitness-tests',
                short_label: 'FT',
                name: 'Fitness Tests',
                type: 'link',
                icon: 'feather icon-box'
            },
            {
                state: 'practice-matches',
                short_label: 'PM',
                name: 'Practice Matches',
                type: 'link',
                icon: 'feather icon-calendar'
            },
            {
                state: 'tournaments',
                short_label: 'T',
                name: 'Tournaments',
                type: 'link',
                icon: 'feather icon-award'
            },
            {
                state: 'goals',
                short_label: 'G',
                name: 'Goals',
                type: 'link',
                icon: 'feather icon-target'
            },
        ],
    }
];

/*

   
    
    
    
    
    
    

 */



@Injectable()
export class MenuItems
{
    getAll(): Menu[]
    {
        return MENUITEMS;
    }
}
