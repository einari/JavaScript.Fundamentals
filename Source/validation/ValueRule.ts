// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IRule, IRuleContext, Reason } from '@dolittle/rules'

export abstract class ValueRule implements IRule {

    static ValueTypeMismatch: Reason = Reason.create("150757B0-8118-42FB-A8C4-2D49E7AC3AFD", "Value type mismatch for value of type '{type}'");

    /** @inheritdoc */
    abstract evaluate(context: IRuleContext, source: any): void;

    /**
     * Check if value is of desired type and fail if not.
     * @param {IRuleContext} context - The context to potentially fail into.
     * @param {*} value - The value to check type for.
     * @param {*} desiredType - The constructor representing the type, e.g. String, Number, Object or your custom type.
     * @returns {boolean} - true if not failed and type is correct, false if not.
     */
    protected failIfValueTypeMismatch(context: IRuleContext, value: any, desiredType: any): boolean {
        if (value.constructor == desiredType) return true;            
        context.fail(this, value, ValueRule.ValueTypeMismatch.withArguments({ type: typeof value }));
        return false;
    }
}