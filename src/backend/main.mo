import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import List "mo:core/List";
import Order "mo:core/Order";
import Array "mo:core/Array";


// Use migration module for persistent data

actor {
  type Category = {
    #Class10;
    #Class12;
    #JEE;
    #NEET;
  };

  type Subject = {
    id : Nat;
    name : Text;
    chapters : [Chapter];
  };

  type Chapter = {
    name : Text;
    url : ?Text;
  };

  type SyllabusEntry = {
    category : Category;
    subjects : [Subject];
  };

  type QuestionPaper = {
    title : Text;
    year : Nat;
    url : Text;
    solutionUrl : ?Text;
  };

  type QABankEntry = {
    question : Text;
    answer : Text;
    subject : Text;
    category : Category;
  };

  type GlossaryTerm = {
    term : Text;
    definition : Text;
    subject : Text;
  };

  module Category {
    public func compare(x : Category, y : Category) : Order.Order {
      func toNat(cat : Category) : Nat {
        switch (cat) {
          case (#Class10) { 0 };
          case (#Class12) { 1 };
          case (#JEE) { 2 };
          case (#NEET) { 3 };
        };
      };
      Nat.compare(toNat(x), toNat(y));
    };
  };

  module CategorySubject {
    public func compare(lhs : (Category, Text), rhs : (Category, Text)) : Order.Order {
      switch (Category.compare(lhs.0, rhs.0)) {
        case (#equal) { Text.compare(lhs.1, rhs.1) };
        case (order) { order };
      };
    };
  };

  let syllabusMap = Map.empty<Category, SyllabusEntry>();
  let questionPaperMap = Map.empty<(Category, Text), List.List<QuestionPaper>>();
  let qaBankMap = Map.empty<Nat, QABankEntry>();
  let glossaryMap = Map.empty<Nat, GlossaryTerm>();

  // Stable visitor counter
  stable var visitCount : Nat = 0;

  let emptySyllabus = {
    category = #Class10;
    subjects = [];
  };

  public query ({ caller }) func getSyllabus(category : Category) : async SyllabusEntry {
    switch (syllabusMap.get(category)) {
      case (null) { emptySyllabus };
      case (?entry) { entry };
    };
  };

  public query ({ caller }) func getQuestionPapers(category : Category, subject : Text) : async [QuestionPaper] {
    let papers = switch (questionPaperMap.get((category, subject))) {
      case (null) { List.empty<QuestionPaper>() };
      case (?ps) { ps };
    };
    papers.toArray();
  };

  func textContains(text : Text, substr : Text) : Bool {
    text.toLower().contains(#text (substr.toLower()));
  };

  public query ({ caller }) func searchQABank(keyword : Text) : async [QABankEntry] {
    let results = qaBankMap.values();
    let filtered = results.filter(
      func(entry) {
        textContains(entry.question, keyword) or textContains(entry.answer, keyword);
      }
    );
    filtered.toArray();
  };

  public query ({ caller }) func getQABankEntriesBySubject(category : Category, subject : Text) : async [QABankEntry] {
    let results = qaBankMap.values();
    let filtered = results.filter(
      func(entry) {
        entry.category == category and entry.subject == subject
      }
    );
    filtered.toArray();
  };

  public query ({ caller }) func searchGlossary(keyword : Text) : async [GlossaryTerm] {
    let results = glossaryMap.values();
    let filtered = results.filter(
      func(term) {
        textContains(term.term, keyword) or textContains(term.definition, keyword);
      }
    );
    filtered.toArray();
  };

  // Visitor counter functions
  public func recordVisit() : async Nat {
    visitCount += 1;
    visitCount
  };

  public query func getVisitCount() : async Nat {
    visitCount
  };

  system func preupgrade() {};
  system func postupgrade() {
    // Populate syllabusMap
    let class10MathChapters : [Chapter] = [
      { name = "Real Numbers"; url = null },
      { name = "Polynomials"; url = null },
      { name = "Pair of Linear Equations in Two Variables"; url = null },
      { name = "Quadratic Equations"; url = null },
      { name = "Arithmetic Progressions"; url = null },
      { name = "Triangles"; url = null },
      { name = "Coordinate Geometry"; url = null },
      { name = "Introduction to Trigonometry"; url = null },
      { name = "Applications of Trigonometry"; url = null },
      { name = "Circles"; url = null },
      { name = "Constructions"; url = null },
      { name = "Areas Related to Circles"; url = null },
      { name = "Surface Areas and Volumes"; url = null },
      { name = "Statistics"; url = null },
      { name = "Probability"; url = null },
    ];

    let class10ScienceChapters : [Chapter] = [
      { name = "Chemical Reactions and Equations"; url = null },
      { name = "Acids Bases and Salts"; url = null },
      { name = "Metals and Non-metals"; url = null },
      { name = "Carbon and its Compounds"; url = null },
      { name = "Periodic Classification of Elements"; url = null },
      { name = "Life Processes"; url = null },
      { name = "Control and Coordination"; url = null },
      { name = "How do Organisms Reproduce"; url = null },
      { name = "Heredity and Evolution"; url = null },
      { name = "Light - Reflection and Refraction"; url = null },
      { name = "Human Eye and Colourful World"; url = null },
      { name = "Electricity"; url = null },
      { name = "Magnetic Effects of Electric Current"; url = null },
      { name = "Sources of Energy"; url = null },
      { name = "Our Environment"; url = null },
    ];

    let class10Subjects = [
      {
        id = 1;
        name = "Mathematics";
        chapters = class10MathChapters;
      },
      {
        id = 2;
        name = "Science";
        chapters = class10ScienceChapters;
      },
    ];

    let syllabusEntry = {
      category = #Class10;
      subjects = class10Subjects;
    };
    syllabusMap.add(#Class10, syllabusEntry);

    let mathPapers = List.fromArray<QuestionPaper>([
      {
        title = "CBSE Class 10 Mathematics 2023";
        year = 2023;
        url = "https://cbseacademic.nic.in/web_material/PreviousYearPaper/2023/Class10/Mathematics.pdf";
        solutionUrl = null;
      },
      {
        title = "CBSE Class 10 Mathematics 2022";
        year = 2022;
        url = "https://cbseacademic.nic.in/web_material/PreviousYearPaper/2022/Class10/Mathematics.pdf";
        solutionUrl = null;
      },
    ]);
    questionPaperMap.add((#Class10, "Mathematics"), mathPapers);

    let qaEntry = {
      question = "What is the formula for kinetic energy?";
      answer = "KE = 1/2 m v^2";
      subject = "Physics";
      category = #Class10;
    };
    qaBankMap.add(0, qaEntry);

    let term1 = {
      term = "Mitosis";
      definition = "Cell division process resulting in two identical cells";
      subject = "Biology";
    };
    glossaryMap.add(0, term1);
  };
};
