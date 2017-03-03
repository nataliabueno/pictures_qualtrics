Qualtrics.SurveyEngine.addOnload(function()
{
     var CurrentLoop = "${lm://CurrentLoopNumber}";
	 var Field2 = "${lm://Field/2}";
     Qualtrics.SurveyEngine.setEmbeddedData(CurrentLoop,Field2);
});

Qualtrics.SurveyEngine.addOnload(function()
{

    this.questionclick = function(event,element)
    {
        console.log(event, element);
        if (element.type == 'radio')
        {
            var choiceNum = element.id.split('~')[2];
            Qualtrics.SurveyEngine.setEmbeddedData("choiceNum", choiceNum);
        }
    }
});