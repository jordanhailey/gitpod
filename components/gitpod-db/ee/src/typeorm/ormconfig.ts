/**
 * Copyright (c) 2021 Gitpod GmbH. All rights reserved.
 * Licensed under the Gitpod Enterprise Source Code License,
 * See License.enterprise.txt in the project root folder.
 */

import { Config } from "../../../src/config";
import { TypeORM } from "../../../src";

/* NOTE: This file is only used for the TypeORM CLI and not for TypeORM operations in our code (e.g. server).
 * It has to be compiled to Javascript first (e.g. yarn build) ... `yarn typeorm` expects this file as Javascript in lib/typeorm/ormconfig.js
 */

module.exports = {
    ...TypeORM.defaultOptions(__dirname),
    ...(new Config()).dbConfig,
    migrationsTableName: "migrations_io",
}
