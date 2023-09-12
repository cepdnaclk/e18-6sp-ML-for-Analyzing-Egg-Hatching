import pickle
import sys
import json
import numpy as np  
import joblib

# Load the decision tree model
model_file = 'decision_tree_model.pkl'

with open(model_file, 'rb') as model:
    clf = pickle.load(model)

input_data = json.loads(sys.argv[1])

# Convert input data to a NumPy array
input_array = np.array([[
    input_data["Age"],
    input_data["Mortality female"],
    input_data["Mortality male"],
    input_data["sex ratio"],
    input_data["Total Eggs"],
    input_data["Egg Weight"],
    input_data["Feed female"],
    input_data["Feed male"]
]])


# Make predictions
predictions = clf.predict(input_array)

# Convert predictions to a JSON string and print it
print(json.dumps(predictions.tolist()))
