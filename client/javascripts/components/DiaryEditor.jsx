import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default class DiraryEditor extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-6">
          <form>
            <FieldGroup
              id="formControlsText"
              type="text"
              label="タイトル"
              placeholder="Enter text"
            />
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>本文</ControlLabel>
              <FormControl componentClass="textarea" placeholder="textarea" rows={10} />
            </FormGroup>
          </form>
          <Button type="submit" className="btn-raised btn-primary">
            投稿する
          </Button>
          <Button type="submit" className="btn-raised">
            下書き保存
          </Button>
        </div>
        <div className="col-sm-6">
          hoggeee
        </div>
      </div>
    );
  }
}
