import Float "mo:base/Float";
import Func "mo:base/Func";

// backend/main.mo
import Debug "mo:base/Debug";

actor {
    // Function to add two numbers
    public func add(x: Float, y: Float) : async Float {
        return x + y;
    };

    // Function to subtract two numbers
    public func subtract(x: Float, y: Float) : async Float {
        return x - y;
    };

    // Function to multiply two numbers
    public func multiply(x: Float, y: Float) : async Float {
        return x * y;
    };

    // Function to divide two numbers
    public func divide(x: Float, y: Float) : async ?Float {
        if (y == 0.0) {
            Debug.print("Division by zero error");
            return null;
        } else {
            return ?(x / y);
        };
    };
}
