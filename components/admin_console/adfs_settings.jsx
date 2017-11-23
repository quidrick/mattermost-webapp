// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import React from 'react';
import {FormattedHTMLMessage, FormattedMessage} from 'react-intl';

import * as Utils from 'utils/utils.jsx';

import AdminSettings from './admin_settings.jsx';
import BooleanSetting from './boolean_setting.jsx';
import SettingsGroup from './settings_group.jsx';
import TextSetting from './text_setting.jsx';

export default class ADFSSettings extends AdminSettings {
    constructor(props) {
        super(props);

        this.getConfigFromState = this.getConfigFromState.bind(this);
        this.renderSettings = this.renderSettings.bind(this);
    }

    getConfigFromState(config) {
        config.ADFSSettings.Enable = this.state.enable;
        config.ADFSSettings.Id = this.state.id;
        config.ADFSSettings.RelyingPartyIdentifier = this.state.relyingPartyIdentifier;
        config.ADFSSettings.AuthEndpoint = this.state.authEndpoint;
        config.ADFSSettings.TokenEndpoint = this.state.tokenEndpoint;
        config.ADFSSettings.PubKey = this.state.pubKey;

        return config;
    }

    getStateFromConfig(config) {
        return {

            enable: config.ADFSSettings.Enable,
            id: config.ADFSSettings.Id,
            relyingPartyIdentifier: config.ADFSSettings.RelyingPartyIdentifier,
            authEndpoint: config.ADFSSettings.AuthEndpoint,
            tokenEndpoint: config.ADFSSettings.TokenEndpoint,
            pubKey: config.ADFSSettings.PubKey
        };
    }

    renderTitle() {
        return (
            <FormattedMessage
                id='admin.authentication.adfs'
                defaultMessage='ADFS'
            />
        );
    }

    renderSettings() {
        return (
            <SettingsGroup>
                <BooleanSetting
                    id='enable'
                    label={
                        <FormattedMessage
                            id='admin.adfs.enableTitle'
                            defaultMessage='Enable authentication with ADFS: '
                        />
                    }
                    helpText={
                        <div>
                            <FormattedMessage
                                id='admin.adfs.enableDescription'
                                defaultMessage='When true, Mattermost allows team creation and account signup using ADFS OAuth2.'
                            />
                            <br/>
                            <FormattedHTMLMessage
                                id='admin.adfs.EnableHtmlDesc'
                                defaultMessage='You Will need to setup your ADFS 3.0 server to accepted OAUTH2 with redirect url: <your-mattermost-url>/signup/adfs/complete/ <br>For a guide you can visit: http://www.gi-architects.co.uk/2016/04/enable-adfs-oauth2-for-mattermost-2-1'
                            />
                        </div>
                    }
                    value={this.state.enable}
                    onChange={this.handleChange}
                />
                <TextSetting
                    id='id'
                    label={
                        <FormattedMessage
                            id='admin.adfs.clientIdTitle'
                            defaultMessage='Application ID:'
                        />
                    }
                    placeholder={Utils.localizeMessage('admin.adfs.clientIdExample', 'Ex "1dd90126-108e-491d-bb21-128e9cf50519"')}
                    helpText={
                        <FormattedMessage
                            id='admin.adfs.clientIdDescription'
                            defaultMessage='Obtain this value via the instructions above for logging into GitLab'
                        />
                    }
                    value={this.state.id}
                    onChange={this.handleChange}
                    disabled={!this.state.enable}
                />
                <TextSetting
                    id='relyingPartyIdentifier'
                    label={
                        <FormattedMessage
                            id='admin.adfs.RelyingPartyIdentifierTitle'
                            defaultMessage='Relying Party Identifier:'
                        />
                    }
                    placeholder={Utils.localizeMessage('admin.adfs.RelyingPartyIdentifier', 'Ex "https://mattermost.local"')}
                    helpText={
                        <FormattedMessage
                            id='admin.adfs.RelyingPartyIdentifierDescription'
                            defaultMessage='This is the identifier you set up in adfs when creating a relying party trust for Mattermost'
                        />
                    }
                    value={this.state.relyingPartyIdentifier}
                    onChange={this.handleChange}
                    disabled={!this.state.enable}
                />                
                <TextSetting
                    id='authEndpoint'
                    label={
                        <FormattedMessage
                            id='admin.adfs.authTitle'
                            defaultMessage='Auth Endpoint:'
                        />
                    }
                    placeholder={Utils.localizeMessage('admin.adfs.authExample', 'Ex "https://adfsserver.local/adfs/oauth2/authorize"')}
                    helpText={
                        <FormattedMessage
                            id='admin.adfs.authDescription'
                            defaultMessage='Enter https://<your-adfs-url>/adfs/oauth2/authorize'
                        />
                    }
                    value={this.state.authEndpoint}
                    onChange={this.handleChange}
                    disabled={!this.state.enable}
                />                
                <TextSetting
                    id='tokenEndpoint'
                    label={
                        <FormattedMessage
                            id='admin.adfs.tokenTitle'
                            defaultMessage='Token Endpoint:'
                        />
                    }
                    placeholder={Utils.localizeMessage('admin.adfs.tokenExample', 'Ex "https://adfsserver.local/adfs/oauth2/token"')}
                    helpText={
                        <FormattedMessage
                            id='admin.adfs.tokenDescription'
                            defaultMessage='Enter https://<your-adfs-url>/adfs/oauth2/token'
                        />
                    }
                    value={this.state.tokenEndpoint}
                    onChange={this.handleChange}
                    disabled={!this.state.enable}
                />   
                <TextSetting
                    id='pubKey'
                    label={
                        <FormattedMessage
                            id='admin.adfs.pubkeyTitle'
                            defaultMessage='Public Key Location:'
                        />
                    }
                    placeholder={Utils.localizeMessage('admin.adfs.pubkeyExample', 'Ex "/home/mmtest/sign.pem"')}
                    helpText={
                        <FormattedMessage
                            id='admin.adfs.pubkeyDescription'
                            defaultMessage='Specify the absolute location of the public key from the signing certificate in ADFS'
                        />
                    }
                    value={this.state.pubKey}
                    onChange={this.handleChange}
                    disabled={!this.state.enable}
                />                   
                
            </SettingsGroup>
        );
    }
}
