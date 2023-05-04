{
    "action": "modify",
    "datafield1": "Severity = Informational\r\n Host Name = ConsoleHost\r\n Host Version = 5.1.14393.0\r\n Host ID = eff1cb0e-f049-4c74-ba71-3c6d3600bdb4\r\n Host Application = C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe -Command if((Get-ExecutionPolicy ) -ne 'AllSigned') { Set-ExecutionPolicy -Scope Process Bypass }; & 'C:\\mrunner\\sc\\1.ps1'\r\n Engine Version = 5.1.14393.0\r\n Runspace ID = ef6d37e8-7288-4c8b-b7be-a1474dc7d1d7\r\n Pipeline ID = 1\r\n Command Name = Set-ExecutionPolicy\r\n Command Type = Cmdlet\r\n Script Name = \r\n Command Path = \r\n Sequence Number = 21\r\n User = SERVER160\\Administrator\r\n Connected User = \r\n Shell ID = Microsoft.PowerShell",
    "datafield10": "SERVER160\\Administrator",
    "datafield2": "CommandInvocation(Set-ExecutionPolicy): \"Set-ExecutionPolicy\"\r\nParameterBinding(Set-ExecutionPolicy): name=\"Scope\"; value=\"Process\"\r\nParameterBinding(Set-ExecutionPolicy): name=\"ExecutionPolicy\"; value=\"Bypass\"\r\nTerminatingError(Set-ExecutionPolicy): \"Windows PowerShell updated your execution policy successfully, but the setting is overridden by a policy defined at a more specific scope. Due to the override, your shell will retain its current effective execution policy of Unrestricted. Type \"Get-ExecutionPolicy -List\" to view your execution policy settings. For more information please see \"Get-Help Set-ExecutionPolicy\".\"",
    "datafield3": "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\",
    "datafield4": "powershell.exe",
    "datafield6": "S-1-5-21-3500636268-2529342812-1271244175-500",
    "datafield7": "eff1cb0e-f049-4c74-ba71-3c6d3600bdb4",
    "datafield8": "5.1.14393.0",
    "datafield9": "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe -Command if((Get-ExecutionPolicy ) -ne 'AllSigned') { Set-ExecutionPolicy -Scope Process Bypass }; & 'C:\\mrunner\\sc\\1.ps1'",
    "event_src.category": "Operating system",
    "event_src.fqdn": "server16.server16.int",
    "event_src.hostname": "server16",
    "event_src.subsys": "Microsoft-Windows-PowerShell/Operational",
    "event_src.title": "windows",
    "event_src.vendor": "microsoft",
    "id": "PT_Microsoft_Windows_eventlog_Common_PowerShell_4103_Set_Execution_Policy",
    "importance": "info",
    "msgid": "4103",
    "object": "policy",
    "object.property": "execution policy",
    "object.type": "execution",
    "object.value": "Bypass",
    "reason": "Windows PowerShell updated your execution policy successfully, but the setting is overridden by a policy defined at a more specific scope. Due to the override, your shell will retain its current effective execution policy of Unrestricted. Type \"Get-ExecutionPolicy -List\" to view your execution policy settings. For more information please see \"Get-Help Set-ExecutionPolicy\".",
    "status": "failure",
    "time": "2020-01-09T10:27:07.462Z"
}
