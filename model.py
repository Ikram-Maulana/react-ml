import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import pickle

# Load csv file
df = pd.read_csv("Iris.csv")

# Split data into features and labels
X = df[["Sepal_Length", "Sepal_Width", "Petal_Length", "Petal_Width"]]
y = df["Class"]

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=0)

# Feature Scaling
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)

# Instantiate model
classifier = RandomForestClassifier(n_estimators=100, random_state=0)

# Fit model
classifier.fit(X_train, y_train)

# Make pickle file
pickle.dump(classifier, open("model.pkl", "wb"))
