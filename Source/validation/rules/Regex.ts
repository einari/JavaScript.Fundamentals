// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRuleContext, Reason, ValueRule } from '@dolittle/rules';

/**
 * Represents a {ValueRule} for specific regular expression - any value must conform to a regular expression
 */
export class Regex extends ValueRule {
    static NotConformingToExpression: Reason = Reason.create("BE58A125-40DB-47EA-B260-37F7AF4455C5", "Value '{value}' does not conform to regular expression");
    private _regExp: RegExp;

    /**
     * Initializes a new instance of the {Regex} class.
     * @param _expression 
     */
    constructor(private _expression: string) {
        super();
        this._regExp = new RegExp(_expression);
    }

    /**
     * Gets the expression that values must conform to.
     */
    get expression(): string {
        return this._expression;
    }

    /** @inheritdoc */
    evaluate(context: IRuleContext, subject: any): void {
        if (this.failIfValueTypeMismatch(context, subject, String)) {
            if (!(<String>subject).match(this._regExp)) {
                context.fail(this, subject, Regex.NotConformingToExpression.withArguments({ value: subject }));
            }
        }
    }
}