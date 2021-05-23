#!/bin/bash
# Copyright (c) 2020 Gitpod GmbH. All rights reserved.
# Licensed under the GNU Affero General Public License (AGPL).
# See License-AGPL.txt in the project root for license information.

set -e

DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd -P)

THIRD_PARTY_INCLUDES=${PROTOLOC:-$DIR/..}
if [ ! -d "$THIRD_PARTY_INCLUDES"/third_party/google/api ]; then
    echo "missing $THIRD_PARTY_INCLUDES/third_party/google/api"
    exit 1
fi

mkdir -p lib

protoc \
    -I"$THIRD_PARTY_INCLUDES"/third_party -I/usr/lib/protoc/include \
    --plugin="protoc-gen-ts=$DIR/node_modules/.bin/protoc-gen-ts" \
    --js_out="import_style=commonjs,binary:lib" \
    --ts_out="service=grpc-web:lib" \
    -I"${PROTOLOC:-..}" "${PROTOLOC:-..}"/*.proto
