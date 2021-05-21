/**
 * Copyright (c) 2021 Gitpod GmbH. All rights reserved.
 * Licensed under the Gitpod Enterprise Source Code License,
 * See License.enterprise.txt in the project root folder.
 */

import { Container } from 'inversify';
import { dbContainerModuleEE as dbContainerModuleEE } from './container-module';
import { dbContainerModule } from '../../src/container-module';

export const testContainerIO = new Container();
testContainerIO.load(dbContainerModule);
testContainerIO.load(dbContainerModuleEE);