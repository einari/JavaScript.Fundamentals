// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRule, IRuleContext, Cause } from './index';

/**
 * Represents a broken rule.
 */
export class BrokenRule {
    private _rule:IRule;
    private _source:any;
    private _context:IRuleContext;
    private _causes:Array<Cause> = [];

    /**
     * Initializes a new instance of the {BrokenRule} class.
     * @param {IRule} rule - The rule that is broken.
     * @param {*} source - Source that was evaluated.
     * @param {IRuleContext} context - Context evaluated in.
     */
    constructor(rule: IRule, source: any, context: IRuleContext) {
        this._rule = rule;
        this._source = source;
        this._context = context;
    }

    /**
     * Gets the rule associated with the broken rule.
     * @returns {IRule}
     */
    get rule(): IRule {
        return this._rule;
    }

    /**
     * Gets the source that was part of the evaluation.
     * @returns {*}
     */
    get source(): any {
        return this._source;
    }

    /**
     * Gets the {IRuleContext} for the evaluation.
     * @returns {IRuleContext}
     */
    get context(): IRuleContext {
        return this._context;
    }

    /**
     * Gets the causes that caused the broken rule.
     * @returns {ReadonlyArray<Cause>}
     */
    get causes(): ReadonlyArray<Cause> {
        return this._causes;
    }

    /**
     * Adds a cause of the broken rule
     * @param {Cause} cause - Cause to add
     */
    addCause(cause: Cause) {
        this._causes.push(cause);
    }
}