import React from 'react';
import {Dropbox as DropboxApi} from 'dropbox'
import UI from 'constants/UI.js';
import PropTypes from 'prop-types';

export default class Dropbox extends React.Component {

  static propTypes = {
    accessToken: PropTypes.string,
  }

  static defaultProps = {
    accessToken: UI.dropboxToken,
  }

  constructor(props) {
    super(props);

    this._dropbox = new DropboxApi({ accessToken: this.props.accessToken });

    this.state = { files: [] };
  }

  componentDidMount() {
    this.loadMetadata()
      .then(this.handleMetadataResult)
      .catch(this.handleFailure)
  }

  /* Response Handling */

  handleMetadataResult = (result) => {
    return result.entries.forEach(this.loadFiledata)
  }

  handleFailure = (err) => {
    return console.error(err)
  }

  /* Data Fetching */

  loadMetadata = () => {
    return this._dropbox.filesListFolder(this.props.source)
  }

  loadFiledata = (metadata) => {
    return this._dropbox.filesDownload({ path: metadata.id })
    .then(this.handleDownloadResult)
  }

  /* Data Mutation */

  handleDownloadResult = (fileData) => {
    this.setState((state) => ({
      files: [...state.files, URL.createObjectURL(fileData.fileBlob)]
    }))
  }

  render() {
    return this.state.files && this.props.children(this.state.files);
  }
}