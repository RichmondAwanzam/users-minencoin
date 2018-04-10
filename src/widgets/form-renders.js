import React from 'react';
import TextField from 'material-ui/TextField';
export const renderField = ({ input, label, id, type, meta: { touched, error, warning }, ...custom }) => {
    console.log('Check custom', custom);
    return ((type !== 'file') ?
        
            (<div style={{padding:'0 8px'}}> <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={{ width: '100%' }}>
                <TextField type={type} multiLine={custom.multiLine} rows={custom.rows} hintText={label}
                    fullWidth {...input }
                    floatingLabelText={label}
                    errorText={touched && error} {...custom} />



            </div>
                {/*touched &&((error &&<span style={{color:"#c00",fontWeight:'11px',display:'block'}}> {error}</span>) )*/}
            </div>)
        : <div >
        <input {...input} style={touched && error ? { border: "1px solid #c00" } : {}} placeholder={label} type={type} accept="images/*" /></div>)
}




