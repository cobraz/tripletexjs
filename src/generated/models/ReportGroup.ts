/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface ReportGroup {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * The name to be shown for the column or row.
     */
    name?: string;
    /**
     * Currently not in use
     */
    description?: string;
    /**
     * How to generate subgroups: 0 = None, 100 = Accounts, 101 = Departments, 200 = Months
     */
    type?: number;
    /**
     * Specifies period filter: 0 = Absolute, 2 = Inherit, 4 = Last year
     */
    periodType?: number;
    /**
     * Start date when periodType == 0. Inclusive.
     */
    startDate?: string;
    /**
     * End date when periodType == 0. Exclusive.
     */
    endDate?: string;
    /**
     * Expression / formula according to Rule Engine Expression Language
     */
    expression?: string;
    /**
     * Variable name that can be used to reference this group
     */
    variableName?: string;
    /**
     * Used to select expression if both column and row expression is set. The bigger value wins.
     */
    precedence?: number;
    /**
     * Start number for object type given by type
     */
    numberStart?: number;
    /**
     * End number for object type given by type
     */
    numberEnd?: number;
    /**
     * Format string for value (how to print number, date etc)
     */
    valueFormat?: string;
    /**
     * Format string for cell (indentation, font size etc)
     */
    cellFormat?: string;
    /**
     * Hide this group?
     */
    hideSelf?: boolean;
    /**
     * Hide the subgroups of this group?
     */
    hideChildren?: boolean;
    /**
     * Child groups
     */
    children?: Array<ReportGroup>;
}
