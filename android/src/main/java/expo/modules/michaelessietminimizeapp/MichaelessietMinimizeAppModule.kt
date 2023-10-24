package expo.modules.michaelessietminimizeapp

import android.app.Activity
import android.content.Intent
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition


class MichaelessietMinimizeAppModule : Module() {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('MichaelessietMinimizeApp')` in JavaScript.
    Name("MichaelessietMinimizeApp")

    Function("goBack") {
      val activity: Activity? = appContext.currentActivity;
      activity?.moveTaskToBack(true)
    }

    Function("minimize") {
      val startMain = Intent(Intent.ACTION_MAIN)
      startMain.addCategory(Intent.CATEGORY_HOME)
      startMain.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
      appContext.reactContext?.startActivity(startMain)
    }

    Function("exit") {
      val activity: Activity? = appContext.currentActivity
      if (activity != null) {
        activity.finishAffinity()
        System.exit(0)
      }
    }

    // Enables the module to be used as a native view. Definition components that are accepted as part of
    // the view definition: Prop, Events.
    View(MichaelessietMinimizeAppView::class) {
      // Defines a setter for the `name` prop.
      Prop("name") { view: MichaelessietMinimizeAppView, prop: String ->
        println(prop)
      }
    }
  }
}
