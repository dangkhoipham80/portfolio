import React, { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw, Home, Bug } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error details
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    this.setState({
      error,
      errorInfo,
    });

    // You can also log the error to an error reporting service here
    // Example: logErrorToService(error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full text-center space-y-8"
          >
            {/* Error Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              className="flex justify-center"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(239, 68, 68, 0.4)",
                      "0 0 0 10px rgba(239, 68, 68, 0)",
                      "0 0 0 0 rgba(239, 68, 68, 0.4)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="p-4 rounded-full bg-red-500/10 border border-red-500/20"
                >
                  <AlertTriangle className="h-16 w-16 text-red-500" />
                </motion.div>
              </div>
            </motion.div>

            {/* Error Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Oops! Something went wrong
              </h1>
              <p className="text-xl text-muted-foreground mb-2">
                We encountered an unexpected error
              </p>
              <p className="text-muted-foreground">
                Don't worry, our team has been notified and we're working on it!
              </p>
            </motion.div>

            {/* Error Details (Development) */}
            {process.env.NODE_ENV === "development" && this.state.error && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-red-500/5 border border-red-500/20 rounded-xl p-6 text-left"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Bug className="h-5 w-5 text-red-500" />
                  <h3 className="text-lg font-semibold text-red-500">
                    Development Error Details
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Error Message:
                    </h4>
                    <code className="block p-3 bg-background/50 rounded-lg text-sm text-red-400 font-mono overflow-x-auto">
                      {this.state.error.message}
                    </code>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Stack Trace:
                    </h4>
                    <pre className="p-3 bg-background/50 rounded-lg text-xs text-muted-foreground font-mono overflow-x-auto max-h-40">
                      {this.state.error.stack}
                    </pre>
                  </div>

                  {this.state.errorInfo && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Component Stack:
                      </h4>
                      <pre className="p-3 bg-background/50 rounded-lg text-xs text-muted-foreground font-mono overflow-x-auto max-h-40">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleReload}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300"
              >
                <RefreshCw className="h-5 w-5" />
                Reload Page
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-colors duration-300"
              >
                <Home className="h-5 w-5" />
                Go Home
              </motion.button>
            </motion.div>

            {/* Support Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-8 border-t border-border"
            >
              <p className="text-sm text-muted-foreground">
                If this problem persists, please contact{" "}
                <a
                  href="mailto:dangkhoipham80@gmail.com"
                  className="text-primary hover:underline"
                >
                  dangkhoipham80@gmail.com
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      );
    }

    // If no error, render children normally
    return this.props.children;
  }
}

// Functional component wrapper for easier usage
export const ErrorBoundaryProvider: React.FC<{
  children: ReactNode;
  fallback?: ReactNode;
}> = ({ children, fallback }) => {
  return <ErrorBoundary fallback={fallback}>{children}</ErrorBoundary>;
};

// Hook for triggering errors (useful for testing)
export const useErrorHandler = () => {
  const throwError = (error?: Error) => {
    throw error || new Error("Test error triggered by useErrorHandler");
  };

  return { throwError };
};

// Higher-order component for wrapping components with error boundary
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode
) => {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary fallback={fallback}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${
    Component.displayName || Component.name
  })`;

  return WrappedComponent;
};

export default ErrorBoundary;
