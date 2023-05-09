from django.shortcuts import render

from django.views.generic import TemplateView
from django.template import loader
from django.http import HttpResponse

cnt = 0

questions = [["Seltsamerweise wird im Disney-Hauptquartier die Rolle des ERSTEN vom ZWEITEN gespielt. Nennen Sie ERSTER und ZWEITER.", "Atlanter, Zwerge.",  "Oddly enough, in the Disney headquarters building, the role of FIRST is played by SECOND. Name the FIRST and the SECOND."],
             ["Die Jury des Schönheitswettbewerbs Miss Right Posture bewertet nicht nur das Aussehen der Kandidatinnen, sondern auch objektivere Indikatoren. Zum Beispiel die Art und Weise, wie die Kandidatinnen auf zwei HIERs stehen. Nennen Sie SIE in einem Wort.",
                 "Waagen", "The jury of the Miss Right Posture beauty contest evaluates not only the appearance of the contestants, but also more objective indicators. For example, how the contestants stand on two HER. Name THEM with one word."],
             ["Die Darstellung eines Menschen war nicht schwierig, Vieh war auf dem Lande zu sehen und große Raubtiere kamen manchmal mit Zirkussen nach Europa. Daher war laut Ignat Solowiej die Hauptschwierigkeit für die mittelalterlichen Mönche, ein bekanntes Bild darzustellen, ER. Nennen Sie IHN.",
                 "Adler", "It was not difficult to depict humans, cattle could be seen in the countryside, and large predators sometimes made their way to Europe with circuses. Therefore, according to Ignat Solovyov, the main difficulty for medieval monks when portraying a known image was HE. Name HIM."],
             ["In einem Buch über Moralphilosophie findet sich folgendes Gedankenexperiment: In einer Höhle, in die Wasser eindringt, befinden sich Menschen mit einer Dynamitstange, und der Ausgang der Höhle ist durch einen großen Mann versperrt, der im Gang feststeckt. Der Epigraph zu einem der Kapitel in diesem Buch ist ein Auszug aus einer Präsidentenrede. Welche Rede?",
                 "Harry Truman", "In a book on moral philosophy, there is the following thought experiment: there are men with a stick of dynamite in a cave into which water is rushing in, and the exit from the cave is blocked by a large man stuck in the passage. The epigraph to one of the chapters in this book is an excerpt from a presidential speech. Which one?"],
             ["Im Jahr 2011 hing Norman Rockwells ergreifendes soziales Gemälde Das Problem, mit dem wir alle leben eine Zeit lang in der Lobby des Oval Office. Auf Johnnys Rat hin wurde eine Kopie dieses Gemäldes vor dem Besuch der Jury an der Wand eines Hauses angebracht. Beantworten Sie die Frage: Wer genau war Johnny von 1994-95?",
                 "O.J. Simpson's lawyer", "In 2011, Norman Rockwell's poignant social painting 'The Problem We All Live With' hung in the lobby of the Oval Office for some time. On Johnny's advice, a copy of this painting was placed on the wall of one house before the jury's visit. Answer exactly who Johnny was from 1994-95?"],
             ["Als Roger Fry Van Gogh, Gauguin und Cézanne als Postimpressionisten bezeichnete, bezog er sich nicht nur auf die Tatsache, dass sie alle aus der impressionistischen Bewegung hervorgegangen sind. Jeder von ihnen, so Frye, habe die Botschaft des Impressionismus aufgegriffen, und diese Künstler seien wirklich so etwas wie... WER?",
                 "Postboten", "Roger Fry, in calling Van Gogh, Gauguin and Cézanne post-Impressionists, was not only referring to the fact that they all came out of the Impressionist movement. Each of them, according to Fry, picked up the message of Impressionism, and these artists were indeed something like... WHO?"],
             ["In der Serie Die Pinguine von Madagaskar werden SIE das Land der tausend Hände genannt. Laut Timur Ryzhkov könnte der passende Name für IHN die Namen verschiedener Märchen sein. Benenne IHN mit zwei Wörtern.", "Kontakt zum Tierpark",
                 "In the series 'Penguins of Madagascar,' THIS is called the Land of a Thousand Hands. According to Timur Ryzhkov, the names of several fairy tales might be an appropriate name for HIM. Name HIM with two words."],
             ["Vor etwas mehr als einem Jahrhundert begann der Chirurg Sergei Woronow damit, Gewebe von hingerichteten Verbrechern an ältere Millionäre zu transplantieren, doch die steigende Nachfrage führte schnell zu einem Mangel an Spendermaterial. Voronovs weitere Aktivitäten haben wahrscheinlich die Entstehung von The Man beeinflusst. Welche beiden Wörter haben wir im vorherigen Satz übersehen?",
                 "Auf allen Vieren", "A little more than a century ago, surgeon Sergei Voronov began transplanting tissue from executed criminals to elderly millionaires, but increased demand quickly led to a shortage of donor material. Voronov's further activities probably influenced the emergence of The Man. Which two words did we miss in the previous sentence?"],
             ["In der Tat war es nicht er, der 1818 die Hauptarbeit leistete, sondern seine Schwester Harriet. Harriet war jedoch unverheiratet und daher zu verlegen, um ihren Namen auf den Umschlag zu schreiben. Nennen Sie SEINEN NAMEN.",
                 "Bowdler", "In fact, it was not HE who did the main work in 1818, but his sister Harriet. However, Harriet was unmarried and therefore hesitant to put her name on the cover. Name HIS NAME."]
             ]


def nextQuestion(request):
    global cnt
    print(request)

    # return render(request, "quiz.html")
    template = loader.get_template('quiz.html')
    context = {
        'tasktitle': "Question №" + str(cnt + 1),
        'tasktextvar': questions[cnt][0],
        'answer': questions[cnt][1],
        'translation': questions[cnt][2]
    }
    cnt += 1
    return HttpResponse(template.render(context, request))


class HomePageView(TemplateView):
    template_name = 'quiz.html'


class SettingsPageView(TemplateView):
    template_name = 'settings.html'


class LoginPageView(TemplateView):
    template_name = 'login.html'


# Create your views here.
