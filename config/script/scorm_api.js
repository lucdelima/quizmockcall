/****************************************************************************
© 2000, 2011 Advanced Distributed Learning (ADL). Some Rights Reserved.
*****************************************************************************

Advanced Distributed Learning ("ADL") grants you ("Licensee") a  non-exclusive, 
royalty free, license to use and redistribute this  software in source and binary 
code form, provided that i) this copyright  notice and license appear on all 
copies of the software; and ii) Licensee does not utilize the software in a 
manner which is disparaging to ADL.

This software is provided "AS IS," without a warranty of any kind.  
ALL EXPRESS OR IMPLIED CONDITIONS, REPRESENTATIONS AND WARRANTIES, INCLUDING 
ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR 
NON-INFRINGEMENT, ARE HEREBY EXCLUDED.  ADL AND ITS LICENSORS SHALL NOT BE LIABLE 
FOR ANY DAMAGES SUFFERED BY LICENSEE AS A RESULT OF USING, MODIFYING OR 
DISTRIBUTING THE SOFTWARE OR ITS DERIVATIVES.  IN NO EVENT WILL ADL OR ITS LICENSORS 
BE LIABLE FOR ANY LOST REVENUE, PROFIT OR DATA, OR FOR DIRECT, INDIRECT, SPECIAL, 
CONSEQUENTIAL, INCIDENTAL OR PUNITIVE DAMAGES, HOWEVER CAUSED AND REGARDLESS OF THE 
THEORY OF LIABILITY, ARISING OUT OF THE USE OF OR INABILITY TO USE SOFTWARE, EVEN IF 
ADL HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

*****************************************************************************
*SCORM_12_APIwrapper.js code is licensed under the Creative Commons
Attribution-ShareAlike 3.0 Unported License.

To view a copy of this license:

     - Visit http://creativecommons.org/licenses/by-sa/3.0/ 
     - Or send a letter to
            Creative Commons, 444 Castro Street,  Suite 900, Mountain View,
            California, 94041, USA.

The following is a summary of the full license which is available at:

      - http://creativecommons.org/licenses/by-sa/3.0/legalcode

*****************************************************************************

Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)

You are free to:

     - Share : to copy, distribute and transmit the work
     - Remix : to adapt the work

Under the following conditions:

     - Attribution: You must attribute the work in the manner specified by 
       the author or licensor (but not in any way that suggests that they 
       endorse you or your use of the work).

     - Share Alike: If you alter, transform, or build upon this work, you 
       may distribute the resulting work only under the same or similar 
       license to this one.

With the understanding that:

     - Waiver: Any of the above conditions can be waived if you get permission 
       from the copyright holder.

     - Public Domain: Where the work or any of its elements is in the public 
       domain under applicable law, that status is in no way affected by the license.

     - Other Rights: In no way are any of the following rights affected by the license:

           * Your fair dealing or fair use rights, or other applicable copyright 
             exceptions and limitations;

           * The author's moral rights;

           * Rights other persons may have either in the work itself or in how the 
             work is used, such as publicity or privacy rights.

     - Notice: For any reuse or distribution, you must make clear to others the 
               license terms of this work.

****************************************************************************/

var debug=false;var output=window.console;var _NoError={"code":"0","string":"No Error","diagnostic":"No Error"};var _GeneralException={"code":"101","string":"General Exception","diagnostic":"General Exception"};var initialized=false;var apiHandle=null;function doLMSInitialize(){if(initialized)return"true";var api=getAPIHandle();if(api==null){message("Unable to locate the LMS's API Implementation.\nLMSInitialize was not successful.");return"false";}var result=api.LMSInitialize("");if(result.toString()!="true"){var err=ErrorHandler();message("LMSInitialize failed with error code: "+err.code);}else
{initialized=true;}return result.toString();}function doLMSFinish(){if(!initialized)return"true";var api=getAPIHandle();if(api==null){message("Unable to locate the LMS's API Implementation.\nLMSFinish was not successful.");return"false";}else
{var result=api.LMSFinish("");if(result.toString()!="true"){var err=ErrorHandler();message("LMSFinish failed with error code: "+err.code);}}initialized=false;return result.toString();}function doLMSGetValue(name){var api=getAPIHandle();var result="";if(api==null){message("Unable to locate the LMS's API Implementation.\nLMSGetValue was not successful.");}else if(!initialized&&!doLMSInitialize()){var err=ErrorHandler();message("LMSGetValue failed - Could not initialize communication with the LMS - error code: "+err.code);}else
{result=api.LMSGetValue(name);var error=ErrorHandler();if(error.code!=_NoError.code){message("LMSGetValue("+name+") failed. \n"+error.code+": "+error.string);result="";}}return result.toString();}function doLMSSetValue(name,value){var api=getAPIHandle();var result="false";if(api==null){message("Unable to locate the LMS's API Implementation.\nLMSSetValue was not successful.");}else if(!initialized&&!doLMSInitialize()){var err=ErrorHandler();message("LMSSetValue failed - Could not initialize communication with the LMS - error code: "+err.code);}else
{result=api.LMSSetValue(name,value);if(result.toString()!="true"){var err=ErrorHandler();message("LMSSetValue("+name+", "+value+") failed. \n"+err.code+": "+err.string);}}return result.toString();}function doLMSCommit(){var api=getAPIHandle();var result="false";if(api==null){message("Unable to locate the LMS's API Implementation.\nLMSCommit was not successful.");}else if(!initialized&&!doLMSInitialize()){var err=ErrorHandler();message("LMSCommit failed - Could not initialize communication with the LMS - error code: "+err.code);}else
{result=api.LMSCommit("");if(result!="true"){var err=ErrorHandler();message("LMSCommit failed - error code: "+err.code);}}return result.toString();}function doLMSGetLastError(){var api=getAPIHandle();if(api==null){message("Unable to locate the LMS's API Implementation.\nLMSGetLastError was not successful.");return _GeneralException.code;}return api.LMSGetLastError().toString();}function doLMSGetErrorString(errorCode){var api=getAPIHandle();if(api==null){message("Unable to locate the LMS's API Implementation.\nLMSGetErrorString was not successful.");return _GeneralException.string;}return api.LMSGetErrorString(errorCode).toString();}function doLMSGetDiagnostic(errorCode){var api=getAPIHandle();if(api==null){message("Unable to locate the LMS's API Implementation.\nLMSGetDiagnostic was not successful.");return"Unable to locate the LMS's API Implementation. LMSGetDiagnostic was not successful.";}return api.LMSGetDiagnostic(errorCode).toString();}function ErrorHandler(){var error={"code":_NoError.code,"string":_NoError.string,"diagnostic":_NoError.diagnostic};var api=getAPIHandle();if(api==null){message("Unable to locate the LMS's API Implementation.\nCannot determine LMS error code.");error.code=_GeneralException.code;error.string=_GeneralException.string;error.diagnostic="Unable to locate the LMS's API Implementation. Cannot determine LMS error code.";return error;}error.code=api.LMSGetLastError().toString();if(error.code!=_NoError.code){error.string=api.LMSGetErrorString(error.code);error.diagnostic=api.LMSGetDiagnostic("");}return error;}function getAPIHandle(){if(apiHandle==null){apiHandle=getAPI();}return apiHandle;}function findAPI(win){var findAPITries=0;while((win.API==null)&&(win.parent!=null)&&(win.parent!=win)){findAPITries++;if(findAPITries>7){message("Error finding API -- too deeply nested.");return null;}win=win.parent;}return win.API;}function getAPI(){var theAPI=findAPI(window);if((theAPI==null)&&(window.opener!=null)&&(typeof(window.opener)!="undefined")){theAPI=findAPI(window.opener);}if(theAPI==null){message("Unable to find an API adapter");}return theAPI}function message(str){if(debug){output.log(str);}}