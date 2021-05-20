/**
 * Copyright (c) 2021 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License-AGPL.txt in the project root for license information.
 */

import gitpodIcon from './icons/gitpod.svg';
import { getSafeURLRedirect } from "./provider-utils";

export default function OAuthClientApproval() {
    const params = new URLSearchParams(window.location.search);
    const clientName = params.get("clientName") || "";
    const redirectTo = getSafeURLRedirect(params.get("redirectTo") || undefined) || "/";

    const updateClientApproval = async (isApproved: boolean) => {
        window.location.replace(`${redirectTo}&approved=${isApproved ? 'yes' : 'no'}`);
    }

    return (<div id="oauth-container" className="z-50 flex w-screen h-screen">
        <div id="oauth-section" className="flex-grow flex w-full">
            <div id="oauth-section-column" className="flex-grow max-w-2xl flex flex-col h-100 mx-auto">
                <div className="flex-grow h-100 flex flex-row items-center justify-center" >
                    <div className="rounded-xl px-10 py-10 mx-auto">
                        <div className="mx-auto pb-8">
                            <img src={gitpodIcon} className="h-16 mx-auto" />
                        </div>
                        <div className="mx-auto text-center pb-8 space-y-2">
                            <h1 className="text-3xl">Authorize {clientName}</h1>
                        <h4>You are about to authorize ${clientName} to access your Gitpod account including data for all workspaces.</h4>
                        </div>
                        <div className="flex flex-col space-y-3 items-center">
                            <button key={"button-yes"} className="primary" onClick={() => updateClientApproval(true)}>
                                Authorize
                            </button>
                            <button className="secondary" onClick={() => updateClientApproval(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}