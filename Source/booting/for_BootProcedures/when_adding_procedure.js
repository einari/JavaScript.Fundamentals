/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { BootProcedures } from "../BootProcedures";
import { BootProcedure } from "../BootProcedure";

class MyProcedure extends BootProcedure {}

describe('when adding procedure', () => {
    let procedures = new BootProcedures();
    let procedure = new MyProcedure();

    beforeEach(() => {
        (becauseOf => {
            procedures.add(procedure);
        })();
    });

    it('should hold the added procedure', () => procedures.all[0].should.equal(procedure));
});