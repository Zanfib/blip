/**
 * Copyright (c) 2017, Tidepool Project
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the associated License, which is identical to the BSD 2-Clause
 * License as published by the Open Source Initiative at opensource.org.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the License for more details.
 *
 * You should have received a copy of the License along with this program; if
 * not, you can obtain one from Tidepool Project at tidepool.org.
 */

import _ from 'lodash';
import React, { Component } from 'react';
import cx from 'classnames';
import GitHub from 'github-api';
import ModalOverlay from '../modaloverlay';
import { URL_UPLOADER_DOWNLOAD_PAGE } from '../../core/constants';
import logoSrc from '../uploaderbutton/images/T-logo-dark-512x512.png';

const github = new GitHub();

class UploadLaunchOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestWinRelease: null,
      latestMacRelease: null,
      error: null,
    };
  }

  static propTypes = {
    overlayClickHandler: React.PropTypes.func.isRequired,
  };

  componentWillMount = () => {
    const uploaderRepo = github.getRepo('tidepool-org/chrome-uploader');
    uploaderRepo.listReleases((err, releases, request) => {
      if(err){
        this.setState({error: true});
      }
      this.setState(this.getLatestGithubRelease(releases));
    });
  }

  getLatestGithubRelease = (releases) => {
    const latestRelease = _.filter(releases, {prerelease: false})[0];
    let latestTag = latestRelease.tag_name;
    const urlBase = `https://github.com/tidepool-org/chrome-uploader/releases/download/${latestTag}`;
    latestTag = latestTag.substr(1);
    const latestWinRelease = `${urlBase}/tidepool-uploader-setup-${latestTag}.exe`;
    const latestMacRelease = `${urlBase}/tidepool-uploader-${latestTag}.pkg`;
    return {
      latestWinRelease: latestWinRelease,
      latestMacRelease: latestMacRelease,
    };
  }

  renderErrorText = () => {
    return (
      <div>Error fetching release information, please go to our
        <a href={URL_UPLOADER_DOWNLOAD_PAGE}> downloads page</a>.
      </div>
    )
  }

  render = () => {
    const winReleaseClasses = cx({
      btn: true,
      'btn-primary': true,
      disabled: !this.state.latestWinRelease,
    });
    const macReleaseClasses = cx({
      btn: true,
      'btn-primary': true,
      disabled: !this.state.latestMacRelease,
    });
    let content;

    if(this.state.error) {
      content = this.renderErrorText();
    } else {
      content = [
        <div className='ModalOverlay-content' key={'div1'}>
          <div className='UploadLaunchOverlay-content'>
            <div className='UploadLaunchOverlay-icon'>
              <img src={logoSrc} />
            </div>
            <div>
              <div className='UploadLaunchOverlay-title'>Launching Uploader</div>
              <div className='UploadLaunchOverlay-text'>If you don't yet have the Tidepool Uploader, please install the appropriate version below</div>
            </div>
          </div>
        </div>,
        <div className='ModalOverlay-controls' key={'div2'}>
          <a className={winReleaseClasses} href={`${this.state.latestWinRelease}`} disabled={!this.state.latestWinRelease}>Download for PC</a>
          <a className={macReleaseClasses} href={`${this.state.latestMacRelease}`} disabled={!this.state.latestMacRelease}>Download for Mac</a>
        </div>,
      ]
    }

    const dialog = (
      <div className='UploadLaunchOverlay'>
        {content}
      </div>
    );

    return (
      <ModalOverlay
        show={true}
        dialog={dialog}
        overlayClickHandler={this.props.overlayClickHandler}
      />
    );
  };

};

module.exports = UploadLaunchOverlay;
