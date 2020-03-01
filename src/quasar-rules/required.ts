export default (val: string): true|string => val && val.length > 0 || 'Field is required'
