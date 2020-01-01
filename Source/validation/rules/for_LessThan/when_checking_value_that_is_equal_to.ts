// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleContext } from '@dolittle/rules';
import { Reasons, LessThan } from '../index';
import '@dolittle/rules.testing';

describe('when checking value that is equal to', () => {
    let rule = new LessThan(42);
    let context = new RuleContext(null);
    let value = 42;

    rule.evaluate(context, value);
    
    it('should fail', () => context.should.failWith(rule, value, Reasons.ValueIsEqual));
});