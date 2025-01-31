import subprocess

permissions = [
    "SEND_SMS",
    "READ_PHONE_STATE",
    "GET_ACCOUNTS",
    "RECEIVE_SMS",
    "READ_SMS",
    "USE_CREDENTIALS",
    "MANAGE_ACCOUNTS",
    "WRITE_SMS",
    "READ_SYNC_SETTINGS",
    "AUTHENTICATE_ACCOUNTS",
    "WRITE_HISTORY_BOOKMARKS",
    "INSTALL_PACKAGES",
    "CAMERA",
    "WRITE_SYNC_SETTINGS",
    "READ_HISTORY_BOOKMARKS",
    "INTERNET",
    "RECORD_AUDIO",
    "ACCESS_LOCATION_EXTRA_COMMANDS",
    "WRITE_APN_SETTINGS",
    "BIND_REMOTEVIEWS",
    "READ_PROFILE",
    "MODIFY_AUDIO_SETTINGS",
    "READ_SYNC_STATS",
    "BROADCAST_STICKY",
    "WAKE_LOCK",
    "RECEIVE_BOOT_COMPLETED",
    "RESTART_PACKAGES",
    "BLUETOOTH",
    "READ_CALENDAR",
    "READ_CALL_LOG",
    "SUBSCRIBED_FEEDS_WRITE",
    "READ_EXTERNAL_STORAGE",
    "VIBRATE",
    "ACCESS_NETWORK_STATE",
    "SUBSCRIBED_FEEDS_READ",
    "CHANGE_WIFI_MULTICAST_STATE",
    "WRITE_CALENDAR",
    "MASTER_CLEAR",
    "UPDATE_DEVICE_STATS",
    "WRITE_CALL_LOG",
    "DELETE_PACKAGES",
    "GET_TASKS",
    "GLOBAL_SEARCH",
    "DELETE_CACHE_FILES",
    "WRITE_USER_DICTIONARY",
    "REORDER_TASKS",
    "WRITE_PROFILE",
    "SET_WALLPAPER",
    "BIND_INPUT_METHOD",
    "READ_SOCIAL_STREAM",
    "READ_USER_DICTIONARY",
    "PROCESS_OUTGOING_CALLS",
    "CALL_PRIVILEGED",
    "BIND_WALLPAPER",
    "RECEIVE_WAP_PUSH",
    "DUMP",
    "BATTERY_STATS",
    "ACCESS_COARSE_LOCATION",
    "SET_TIME",
    "WRITE_SOCIAL_STREAM",
    "WRITE_SETTINGS",
    "REBOOT",
    "BLUETOOTH_ADMIN",
    "BIND_DEVICE_ADMIN",
    "WRITE_GSERVICES",
    "KILL_BACKGROUND_PROCESSES",
    "SET_ALARM",
    "ACCOUNT_MANAGER",
    "STATUS_BAR",
    "PERSISTENT_ACTIVITY",
    "CHANGE_NETWORK_STATE",
    "RECEIVE_MMS",
    "SET_TIME_ZONE",
    "CONTROL_LOCATION_UPDATES",
    "BROADCAST_WAP_PUSH",
    "BIND_ACCESSIBILITY_SERVICE",
    "ADD_VOICEMAIL",
    "CALL_PHONE",
    "BIND_APPWIDGET",
    "FLASHLIGHT",
    "READ_LOGS",
    "SET_PROCESS_LIMIT",
    "MOUNT_UNMOUNT_FILESYSTEMS",
    "BIND_TEXT_SERVICE",
    "INSTALL_LOCATION_PROVIDER",
    "SYSTEM_ALERT_WINDOW",
    "MOUNT_FORMAT_FILESYSTEMS",
    "CHANGE_CONFIGURATION",
    "CLEAR_APP_USER_DATA",
    "CHANGE_WIFI_STATE",
    "READ_FRAME_BUFFER",
    "ACCESS_SURFACE_FLINGER",
    "BROADCAST_SMS",
    "EXPAND_STATUS_BAR",
    "INTERNAL_SYSTEM_WINDOW",
    "SET_ACTIVITY_WATCHER",
    "WRITE_CONTACTS",
    "BIND_VPN_SERVICE",
    "DISABLE_KEYGUARD",
    "ACCESS_MOCK_LOCATION",
    "GET_PACKAGE_SIZE",
    "MODIFY_PHONE_STATE",
    "CHANGE_COMPONENT_ENABLED_STATE",
    "CLEAR_APP_CACHE",
    "SET_ORIENTATION",
    "READ_CONTACTS",
    "DEVICE_POWER",
    "HARDWARE_TEST",
    "ACCESS_WIFI_STATE",
    "WRITE_EXTERNAL_STORAGE",
    "ACCESS_FINE_LOCATION",
    "SET_WALLPAPER_HINTS",
    "SET_PREFERRED_APPLICATIONS",
    "WRITE_SECURE_SETTINGS" 
]

# Your list with potential duplicate values
all_combinations = [
    "transact", "onServiceConnected", "bindService", "attachInterface", "ServiceConnection", "android.os.Binder",
    "SEND_SMS", "Ljava.lang.Class.getCanonicalName", "Ljava.lang.Class.getMethods", "Ljava.lang.Class.cast",
    "Ljava.net.URLDecoder", "android.content.pm.Signature", "android.telephony.SmsManager", "READ_PHONE_STATE",
    "getBinder", "ClassLoader", "Landroid.content.Context.registerReceiver", "Ljava.lang.Class.getField",
    "Landroid.content.Context.unregisterReceiver", "GET_ACCOUNTS", "RECEIVE_SMS", "Ljava.lang.Class.getDeclaredField",
    "READ_SMS", "getCallingUid", "Ljavax.crypto.spec.SecretKeySpec", "android.intent.action.BOOT_COMPLETED",
    "USE_CREDENTIALS", "MANAGE_ACCOUNTS", "android.content.pm.PackageInfo", "KeySpec", "TelephonyManager.getLine1Number",
    "DexClassLoader", "HttpGet.init", "SecretKey", "Ljava.lang.Class.getMethod", "System.loadLibrary",
    "android.intent.action.SEND", "Ljavax.crypto.Cipher", "WRITE_SMS", "READ_SYNC_SETTINGS", "AUTHENTICATE_ACCOUNTS",
    "android.telephony.gsm.SmsManager", "WRITE_HISTORY_BOOKMARKS", "TelephonyManager.getSubscriberId", "mount",
    "INSTALL_PACKAGES", "Runtime.getRuntime", "CAMERA", "Ljava.lang.Object.getClass", "WRITE_SYNC_SETTINGS",
    "READ_HISTORY_BOOKMARKS", "Ljava.lang.Class.forName", "INTERNET", "android.intent.action.PACKAGE_REPLACED",
    "Binder", "android.intent.action.SEND_MULTIPLE", "RECORD_AUDIO", "IBinder", "android.os.IBinder", "createSubprocess",
    "NFC", "ACCESS_LOCATION_EXTRA_COMMANDS", "URLClassLoader", "WRITE_APN_SETTINGS", "abortBroadcast",
    "BIND_REMOTEVIEWS", "android.intent.action.TIME_SET", "READ_PROFILE", "TelephonyManager.getDeviceId",
    "MODIFY_AUDIO_SETTINGS", "getCallingPid", "READ_SYNC_STATS", "BROADCAST_STICKY", "android.intent.action.PACKAGE_REMOVED",
    "android.intent.action.TIMEZONE_CHANGED", "WAKE_LOCK", "RECEIVE_BOOT_COMPLETED", "RESTART_PACKAGES",
    "Ljava.lang.Class.getPackage", "chmod", "Ljava.lang.Class.getDeclaredClasses", "android.intent.action.ACTION_POWER_DISCONNECTED",
    "android.intent.action.PACKAGE_ADDED", "PathClassLoader", "TelephonyManager.getSimSerialNumber", "Runtime.load",
    "TelephonyManager.getCallState", "BLUETOOTH", "READ_CALENDAR", "READ_CALL_LOG", "SUBSCRIBED_FEEDS_WRITE",
    "READ_EXTERNAL_STORAGE", "TelephonyManager.getSimCountryIso", "sendMultipartTextMessage", "PackageInstaller",
    "VIBRATE", "remount", "android.intent.action.ACTION_SHUTDOWN", "sendDataMessage", "ACCESS_NETWORK_STATE", "chown",
    "HttpPost.init", "Ljava.lang.Class.getClasses", "SUBSCRIBED_FEEDS_READ", "TelephonyManager.isNetworkRoaming",
    "CHANGE_WIFI_MULTICAST_STATE", "WRITE_CALENDAR", "android.intent.action.PACKAGE_DATA_CLEARED", "MASTER_CLEAR",
    "HttpUriRequest", "UPDATE_DEVICE_STATS", "WRITE_CALL_LOG", "DELETE_PACKAGES", "GET_TASKS", "GLOBAL_SEARCH",
    "DELETE_CACHE_FILES", "WRITE_USER_DICTIONARY", "android.intent.action.PACKAGE_CHANGED", "android.intent.action.NEW_OUTGOING_CALL",
    "REORDER_TASKS", "WRITE_PROFILE", "SET_WALLPAPER", "BIND_INPUT_METHOD", "divideMessage", "READ_SOCIAL_STREAM",
    "READ_USER_DICTIONARY", "READ_EXTERNAL_STORAGE", "PROCESS_OUTGOING_CALLS", "CALL_PRIVILEGED", "Runtime.exec",
    "BIND_WALLPAPER", "RECEIVE_WAP_PUSH", "DUMP", "BATTERY_STATS", "ACCESS_COARSE_LOCATION", "SET_TIME",
    "android.intent.action.SENDTO", "WRITE_SOCIAL_STREAM", "WRITE_SETTINGS", "REBOOT", "BLUETOOTH_ADMIN",
    "TelephonyManager.getNetworkOperator", "/system/bin", "MessengerService", "BIND_DEVICE_ADMIN", "WRITE_GSERVICES",
    "IRemoteService", "KILL_BACKGROUND_PROCESSES", "SET_ALARM", "ACCOUNT_MANAGER", "/system/app", "android.intent.action.CALL",
    "STATUS_BAR", "TelephonyManager.getSimOperator", "PERSISTENT_ACTIVITY", "CHANGE_NETWORK_STATE", "onBind", "Process.start",
    "android.intent.action.SCREEN_ON", "Context.bindService", "RECEIVE_MMS", "SET_TIME_ZONE", "android.intent.action.BATTERY_OKAY",
    "CONTROL_LOCATION_UPDATES", "BROADCAST_WAP_PUSH", "BIND_ACCESSIBILITY_SERVICE", "ADD_VOICEMAIL", "CALL_PHONE", "ProcessBuilder",
    "BIND_APPWIDGET", "FLASHLIGHT", "READ_LOGS", "Ljava.lang.Class.getResource", "defineClass", "SET_PROCESS_LIMIT",
    "android.intent.action.PACKAGE_RESTARTED", "MOUNT_UNMOUNT_FILESYSTEMS", "BIND_TEXT_SERVICE", "INSTALL_LOCATION_PROVIDER",
    "android.intent.action.SCREEN_OFF", "findClass", "SYSTEM_ALERT_WINDOW", "MOUNT_FORMAT_FILESYSTEMS", "CHANGE_CONFIGURATION",
    "CLEAR_APP_USER_DATA", "intent.action.RUN", "android.intent.action.SET_WALLPAPER", "CHANGE_WIFI_STATE", "READ_FRAME_BUFFER",
    "ACCESS_SURFACE_FLINGER", "Runtime.loadLibrary", "BROADCAST_SMS", "EXPAND_STATUS_BAR", "INTERNAL_SYSTEM_WINDOW",
    "android.intent.action.BATTERY_LOW", "SET_ACTIVITY_WATCHER", "WRITE_CONTACTS", "android.intent.action.ACTION_POWER_CONNECTED",
    "BIND_VPN_SERVICE", "DISABLE_KEYGUARD", "ACCESS_MOCK_LOCATION", "GET_PACKAGE_SIZE", "MODIFY_PHONE_STATE",
    "CHANGE_COMPONENT_ENABLED_STATE", "CLEAR_APP_CACHE", "SET_ORIENTATION", "READ_CONTACTS", "DEVICE_POWER", "HARDWARE_TEST",
    "ACCESS_WIFI_STATE", "WRITE_EXTERNAL_STORAGE", "ACCESS_FINE_LOCATION", "SET_WALLPAPER_HINTS", "SET_PREFERRED_APPLICATIONS",
    "WRITE_SECURE_SETTINGS"
]

def run_androguard_commands(commands):
        try:
            # Concatenate commands into a single string
            command_string = '\n'.join(commands)

            # Run the command in a subprocess, passing it to the shell
            process = subprocess.Popen(['androguard', 'analyze'], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
            output, error = process.communicate(input=command_string)

            return output, error
        except Exception as e:
            return None, str(e)

    # Example usage:
androguard_commands = [
    "a, d, dx = AnalyzeAPK('D:\Academics\Major Project\programs\canva2.apk')\n'",
    'a.show()',
        # Add more commands as needed
]
    

import re

def extract_permissions_apis_intents(input_text):
    permissions = []
    apis = []
    intents = []

    # Extract DECLARED PERMISSIONS
    declared_permissions_start = input_text.find("DECLARED PERMISSIONS:")
    declared_permissions_end = input_text.find("REQUESTED PERMISSIONS:")
    declared_permissions = input_text[declared_permissions_start:declared_permissions_end].strip()
    permissions.extend(re.findall(r'[\w.]+', declared_permissions.split(':', 1)[1]))  # Filter out characters other than underscore, dot, and English alphabets
    permissions = [permission.split('.')[-1] for permission in permissions]  # Extract only the last word after the last dot

    # Extract REQUESTED PERMISSIONS
    requested_permissions_start = input_text.find("REQUESTED PERMISSIONS:")
    requested_permissions_end = input_text.find("MAIN ACTIVITY:")
    requested_permissions = input_text[requested_permissions_start:requested_permissions_end].strip()
    permissions.extend(re.findall(r'[\w.]+', requested_permissions.split(':', 1)[1]))  # Filter out characters other than underscore, dot, and English alphabets
    permissions = [permission.split('.')[-1] for permission in permissions]  # Extract only the last word after the last dot

    # Extract words containing '.intent.' and '.api.'
    all_words = input_text.split()
    intent_words = [re.sub(r'[^\w.]+', '', word) for word in all_words if '.intent.' in word]
    api_words = [re.sub(r'[^\w.]+', '', word) for word in all_words if '.api.' in word]

    intents.extend(intent_words)
    apis.extend(api_words)

    return permissions, apis, intents


output, error = run_androguard_commands(androguard_commands)

permissions, apis, intents = extract_permissions_apis_intents(output)

# Print the results
print("Permissions:", permissions)
print()
print()
print("APIs:", apis)
print()
print()
print("Intents:", intents)

import pandas as pd

feature_vectors = []

for feature in all_combinations:
    exists_in_any_list = 1 if feature in permissions or feature in apis or feature in intents else 0
    feature_vector = [exists_in_any_list]
    feature_vectors.append(feature_vector)

# Create a DataFrame for the feature vectors
feature_vector_df = pd.DataFrame(feature_vectors, columns=['Exists in Any List'])

# Display the feature vector DataFrame
print(feature_vector_df)