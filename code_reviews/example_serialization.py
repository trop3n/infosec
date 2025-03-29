import pickle
import base64

serialized_data = request.form['serialized_data']
notes_obj = pickle.loads(base64.b64encode(serialized_data))
message = "Notes successfully unpickled."

elif request.method == 'POST':
    if pickle in request.form:
        content = request.form['note_content']
        notes_obj.add_note(content)
        pickled_content = pickle.dumps(notes_obj)
        serialized_data = base64.b64encode(pickled_content).decode('utf-8')
        binary_data = ' '.join(f'{x:02x}' for x in pickled_content)
        messagge = "Notes pickled successfully."